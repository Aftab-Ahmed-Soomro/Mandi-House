import React from 'react'
import { images } from '../../utils/constants/images'

const PopularItems = () => {
    const {popularItem} = images[1];
  return (
    <div>
      <div className='py-6 px-20'>
        <div className='flex justify-between items-center'>
            <img className='rounded' src={popularItem} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PopularItems
