import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="hero grid justify-items-center">
        <div className="hero-banner md:grid grid-cols-2 border">
            <div className="texts  flex flex-col items-center justify-center">
                <div className="first-line flex items-center gap-2">
                    <p className='w-12 h-[2px] bg-gray-700'></p>
                    <p className='text-lg'>OUR BESTSELLERS</p>
                </div>
                <h1 className='text-4xl font-mono leading-relaxed'>Latest Arrivals</h1>
                <div className="third-line flex items-center gap-2">
                    <p className='text-lg'>SHOP NOW</p>
                    <p className='w-12 h-[2px] bg-gray-700'></p>
                </div>
            </div>
            <img className='' src={assets.hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero
