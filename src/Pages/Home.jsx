import React from 'react'
import Header from '../Components/Header/Header'
import PopularItems from '../Components/PopularItems/PopularItems'
import HotAppetizers from '../Components/HotAppetizers/HotAppetizers'
import Chicken from '../Components/Chicken/Chicken'
import Footer from '../Components/Footer/Footer'

const home = () => {
  return (
    <div>
      <Header/>
      <PopularItems />
      <HotAppetizers />
      <Chicken />
      <Footer />
    </div>
  )
}

export default home
