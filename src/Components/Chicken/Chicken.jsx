import React from 'react'
import { images } from '../../utils/constants/images'
import Card from '../Common/Card/Card';

const Chicken = () => {
    const {chicken} = images[1];
  return (
    <div>
      <div>
      <div className='py-6 px-20'>
        <div className='flex justify-between items-center'>
            <img className='rounded' src={chicken} alt="" />
        </div>
      </div>
      <Card />
    </div>
    </div>
  )
}

export default Chicken
