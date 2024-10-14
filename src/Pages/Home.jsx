import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import PopularItems from '../Components/PopularItems/PopularItems'
import HotAppetizers from '../Components/HotAppetizers/HotAppetizers'
import Chicken from '../Components/Chicken/Chicken'
import Footer from '../Components/Footer/Footer'
import { card1 } from '../utils/constants/card'
import Modal from '../Components/Modal/Modal'
import Card from '../Components/Common/Card/Card'

const Home = () => {
  const [isFound, setIsFound] = useState(false);

  const [cardModal, setCardModal] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardId = (id) =>{
    setSelectedCardId(id);
    setCardModal(true);
  }
  
  const [search, setSearch] = useState('');
  const [filterProduct, setFilterProduct] = useState([]);

  const handleSearch = () => {
    const filterSearch = card1.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    if (filterSearch.length === 0) {
      setIsFound(true);
    }
    else {
      // console.log(filterSearch);
      setFilterProduct(filterSearch)
    }
  };
  
  const handleEnterSearch = (e) => {
    if (e.key == 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className='bg-[#0d1f1f]'>
    <div>
      <Header/>
      <div>
        <div className='py-6 px-20'>
          <div className='flex justify-center items-center gap-3'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleEnterSearch} type="text" className='w-[600px] px-3 py-4 rounded-lg' placeholder='Search the Item' />
            <button onClick={handleSearch} className='px-6 py-4 rounded-lg text-white bg-green-900'>Search</button>
          </div>
        </div>
      </div>
      {
  <>
    {filterProduct.length > 0 ? (
      <>
        {/* <PopularItems /> */}
        {/* If search results are available, show them */}
        <div>
          <div className='py-6 px-20'>
            <div className="flex items-center flex-wrap gap-5 justify-center">
              {isFound ? <div className='flex justify-center h-[320px]'><img src="./Assets/imgs/nodata.avif" alt="" /></div> : <>
                {
                filterProduct.map((item, index) => {
                  const { bgImage, title, disPrice, orgPrice } = item;
                  return (
                    <div key={index} onClick={() => handleCardId(item.id)} className="bgImage rounded h-[300px] flex flex-col justify-end px-3 py-3 cursor-pointer animate__animated animate__pulse" style={{ backgroundImage: `url(${bgImage})` }}>
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
                  );
                })
              }
              </>}
            </div>
          </div>
          <Modal modal={cardModal} selectID={selectedCardId} setModal={setCardModal} />
        </div>
      </>
    ) : (
      <>
        {/* If no search results, render the default components */}
        <PopularItems />
        <Card />
        <HotAppetizers />
        <Chicken />
      </>
    )}
  </>
}
      <Footer />
    </div>
    </div>
  )
}

export default Home
