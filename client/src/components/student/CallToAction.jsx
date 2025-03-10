import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
        <h1 className='text-xl md:text-4xl text-gray-80 font-semibold'>Learn Anything, Anytime, Anywhere</h1>

        <div className='flex items-center font-medium gap-6 mt-4'>
          <button className='px-10 py-3 rounded-md text-white bg-blue-600 transition-transform duration-300 hover:scale-110 hover:shadow-lg'>Get Started</button>
          <button className='flex items-center gap-2 text-gray-600 transition-all duration-300 hover:text-blue-600 hover:translate-x-2'>Learn More <img src={assets.arrow_icon} alt="arrow_icpn"/></button>
        </div>   
    </div>
  )
}

export default CallToAction
