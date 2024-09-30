import React from 'react'
import { images } from '../../utils/constants/images'
import Card from '../Common/Card/Card';

const HotAppetizers = () => {
    const {hotAppetizer} = images[1];
  return (
    <div>
      <div className='py-6 px-20'>
        <div className='flex justify-between items-center'>
            <img className='rounded' src={hotAppetizer} alt="" />
        </div>
      </div>
      <Card />
    </div>
  )
}

export default HotAppetizers
