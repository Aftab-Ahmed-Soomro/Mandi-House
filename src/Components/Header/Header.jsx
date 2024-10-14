import React from 'react'
import { images } from '../../utils/constants/images'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-6 px-20'>
    <div className='flex justify-between items-center py-4 px-20 rounded bg-[#193b1d]'>
      <div>
        <img className='w-12 rounded-full' src={images[0].logo} alt="" />
      </div>
      <div className='md:block xsm:hidden'>
        <ul className='flex items-center gap-5 text-white'>
          <li>
            <a href="">Popular Items</a>
          </li>
          <li>
            <a href="">Hot Appetizers</a>
          </li>
          <li>
            <a href="">Chicken</a>
          </li>
          <li>
            <NavLink to='/signin'><button className='bg-yellow-500 p-2 rounded-lg ms-6'>Sign In</button></NavLink> 
          </li>
          <li>
            <NavLink to='/signup'><button className='bg-yellow-500 p-2 rounded-lg'>Sign Up</button></NavLink>
          </li>
        </ul>
      </div>
      <div className='xsm:block md:hidden'>
        <i class="fa-solid fa-bars text-white"></i>
      </div>
    </div>
    </div>
  )
}

export default Header
