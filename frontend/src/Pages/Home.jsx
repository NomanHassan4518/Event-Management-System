import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import PopularEvents from '../Components/Events/PopularEvents'
import Speakers from '../Components/Home/Speakers'

const Home = () => {
  return (
    <div className=''>
      <HeroSection/>
      <PopularEvents showAll={true} />
      <Speakers/>
    </div>
  )
}

export default Home