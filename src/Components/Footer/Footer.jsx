import React from 'react'
import { images } from '../../utils/constants/images'

const Footer = () => {
  return (
    <div>
      <div className='py-6 px-20'>
        <div className='flex justify-between items-center py-4 px-14 rounded bg-[#000]'>
            <div>
                <img className='w-12 rounded-full' src={images[0].logo} alt="" />
            </div>
            <div>
                <img className='w-12 rounded-full' src={images[0].logo} alt="" />
            </div>
        </div>
      </div>  
    </div>
  )
}

export default Footer
