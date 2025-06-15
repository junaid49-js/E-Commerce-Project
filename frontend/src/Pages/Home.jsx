import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSellers from '../Components/BestSellers'
import Policies from '../Components/Policies'
import LetterBox from '../Components/LetterBox'

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSellers />
      <Policies />
      <LetterBox /> 
    </>  
  )
}

export default Home
