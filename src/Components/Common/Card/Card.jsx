import React, { useState } from 'react'
import './Card.css'
import { card1 } from '../../../utils/constants/card'
import 'animate.css';
import Modal from '../../Modal/Modal';

const Card = () => {
  const [cardModal, setCardModal] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardId = (id) =>{
    setSelectedCardId(id);
    setCardModal(true);
  }
  return (
    <div>
      <div className='py-6 px-20'>
        <div className="flex items-center flex-wrap gap-5 justify-center">
          {
            card1.map((item,index)=> {
              const {bgImage, title, disPrice, orgPrice} = item
              return (
                <div key={index} onClick={()=>handleCardId(item.id)} className="bgImage rounded h-[300px] flex flex-col justify-end px-3 py-3 cursor-pointer animate__animated animate__pulse" style={{ backgroundImage: `url(${bgImage})` }}>
                <h1 className='text-white font-medium text-lg mb-2'>{title}</h1>
                <p className='text-white'>From</p>
                <div className='flex gap-2'>
                  <h1 className='text-white font-bold text-lg mt-2'>{disPrice}</h1>
                  <h1 className='text-gray-100 font-normal text-lg mt-2 decoration'>{orgPrice}</h1>
                  <div className='h-9 w-9 rounded-full bg-green-700 ms-11 flex justify-center items-center'>
                    <h1 className='text-3xl mb-2 text-white'>+</h1>
                  </div>
                </div>
            </div>
              )
            })
          }
        </div>
      </div>
      <Modal modal={cardModal} selectID={selectedCardId} setModal={setCardModal} />
    </div>
  )
}

export default Card
