import './Modal.css'
import { card1} from '../../utils/constants/card';
import { useEffect, useState } from 'react';

const Modal = ({modal, setModal, selectID}) => {
    const singleData = card1.find((item)=> {
        return item.id == selectID;
    })

    const [filter, setFilter] = useState(singleData ? singleData.bgImage : '');

    useEffect(() => {
        if (singleData && singleData.bgImage) {
        setFilter(singleData.bgImage);
        }
    }, [singleData]);

    const filterImage = (imageUrl) => {
        setFilter(imageUrl);
    };
    
    return (
    <div>
        {modal && 
        <div className="modal-overlay" onClick={() => setModal(false)}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
    <div className='flex justify-center'>
    <div>
      <img className='w-[410px] h-[450px] rounded-s-lg' src={filter} alt="" />
    </div>
    <div className='bg-white flex flex-col gap-4 py-7 px-6 rounded-e-lg w-[410px]'>
      <div className='flex justify-between items-center'>
          <h1 className='font-bold text-2xl'>{singleData.title}</h1>
          <i onClick={()=>setModal(false)} class="fa-solid fa-circle-xmark text-4xl cursor-pointer"></i>
      </div>
      <div className='flex gap-3'>
          <p className='font-medium text-xl'>{singleData.disPrice}</p>
          <p className='text-gray-500 font-normal text-lg decoration'>{singleData.orgPrice}</p>
      </div>
    <p className='text-gray-500 text-base'>
        {singleData.des}
    </p>
            <div className='gap-2 flex flex-row items-center flex-wrap mt-1'>
                <img onClick={() => filterImage(singleData.bgImage)} className='w-28 h-28 rounded-lg cursor-pointer' src={singleData.bgImage} alt="" />
                <img onClick={() => filterImage(singleData.img1)} className='w-28 h-28 rounded-lg cursor-pointer' src={singleData.img1} alt="" />
                <img onClick={() => filterImage(singleData.img2)} className='w-28 h-28 rounded-lg cursor-pointer' src={singleData.img2} alt="" />
            </div>
        <div>
            <button className='text-white bg-black w-full py-4 rounded-lg mt-4'>Add to Cart</button>
        </div>
    </div>  
    </div>    
    </div>
    </div>
        }
    </div>
  )
}

export default Modal
