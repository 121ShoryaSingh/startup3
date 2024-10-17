"use client"

import React, { useState } from 'react'

import { FaAngleRight, FaAngleDown } from "react-icons/fa";


const data = {
  
  Feature1:  {
      title: 'EASY TO USE',
      description: "Startup FraneWork contains components and complex blocks which can easily be integrated into any design. All of the components are made in the same style and can easily be integrated into projects allowing you to create hundreds of solution",
    },
  Feature2:{
      title: 'VARITY OF DESIGNS',
      description: "Startup FraneWork contains components and complex blocks which can easily be integrated into any design. All of the components are made in the same style and can easily be integrated into projects allowing you to create hundreds of solution",
    },
  Feature3:{
      title: 'FEEL OUR DESIGN',
      description: "Startup FraneWork contains components and complex blocks which can easily be integrated into any design. All of the components are made in the same style and can easily be integrated into projects allowing you to create hundreds of solution",
    },

  
}

const FeaturesPanel = () => {

  const [isFeature1Expand, setIsFeature1Expand] = useState(false)
  const toggleFeature1Expand = () => {
    setIsFeature1Expand(!isFeature1Expand)
  }
  const [isFeature2Expand, setIsFeature2Expand] = useState(false)
  const toggleFeature2Expand = () => {
    setIsFeature2Expand(!isFeature2Expand)
  }
  const [isFeature3Expand, setIsFeature3Expand] = useState(false)
  const toggleFeature3Expand = () => {
    setIsFeature3Expand(!isFeature3Expand)
  }
  

  return (
    <section className='max-w-7xl mx-auto px-10 lg:px-[3rem] xl:px-[10.5rem] pt-[6.25rem] pb-[4.8rem]'>
        <div className=' w-full flex flex-col lg:flex-row justify-between '>
            <div className='lg:w-[42.5rem] flex flex-col justify-start items-center'>
              <div className='w-full mb-[1.5625rem] border-b-4 pb-8 border-[#ebeaed]'>
                <div className='flex items-center gap-2 text-[#1e0e62] text-sm leading-[1.625rem] font-bold cursor-pointer' onClick={toggleFeature1Expand}>
                    {data.Feature1.title}
                    {isFeature1Expand ?  <FaAngleDown/> : <FaAngleRight/>}
                </div>
                {isFeature1Expand && (
                  <p className='text-base leading-[1.625rem] text-[#151439] mt-3 opacity-60'>
                    {data.Feature1.description}
                  </p>
                )}
              </div>
              <div className='w-full mb-[1.5625rem] border-b-4 pb-8 border-[#ebeaed]'>
                <div className='flex items-center gap-2 text-[#1e0e62] text-sm leading-[1.625rem] font-bold cursor-pointer' onClick={toggleFeature2Expand}>
                    {data.Feature2.title}
                    {isFeature2Expand ?  <FaAngleDown/> : <FaAngleRight/>}
                </div>
                {isFeature2Expand && (
                  <p className='text-base leading-[1.625rem] text-[#151439] mt-3 opacity-60'>
                    {data.Feature2.description}
                  </p>
                )}
              </div>
              <div className='w-full mb-[1.5625rem] pb-8'>
                <div className='flex items-center gap-2 text-[#1e0e62] text-sm leading-[1.625rem] font-bold cursor-pointer' onClick={toggleFeature3Expand}>
                    {data.Feature3.title}
                    {isFeature3Expand ?  <FaAngleDown/> : <FaAngleRight/>}
                </div>
                {isFeature3Expand && (
                  <p className='text-base leading-[1.625rem] text-[#151439] mt-3 opacity-60'>
                    {data.Feature3.description}
                  </p>
                )}
              </div>
            </div>
            <div className="w-[11.8125rem]">
              <span className='text-sm leading-[1.625rem] text-[#151439] opacity-60 mb-4'>HAVE A QUESTION?</span>
              <p className='text-lg text-[#1e0e62] mb-4'>Startup Framework includes great form options for your startup projects.</p>
              <button className='bg-[#482be7] hover:bg-[#1e0e62] py-2 px-4 rounded-full text-base leading-[1.375rem] text-white'>Get Help</button>
            </div>
        </div>
    </section>
  )
}

export default FeaturesPanel
