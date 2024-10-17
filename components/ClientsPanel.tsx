import Image from 'next/image'
import React from 'react'

const data = {

    images:[
        {number:1, Url: "/fox.svg", width:100, height:43}, 
        {number:2, Url: "/google.svg", width:132, height:43}, 
        {number:3, Url: "/walmart.svg", width:184, height:44}, 
        {number:4, Url: "/adidas.svg", width:104, height:70}, 
        {number:5, Url: "/pizzahut.svg", width:82, height:84 }, 
        {number:6, Url: "/philips.svg", width:153, height:28}, 
        {number:7, Url: "/cnn.svg", width:106, height:51}, 
        {number:8, Url: "/beanstalk.svg", width:171, height:53} 
    ]
}

const ClientsPanel = () => {
  return (
    <section className='bg-[#2f1893] lg:px-16 lg:py-16 px-8 py-8 sm:px-12 sm:py-12'>
        <div className='max-w-7xl mx-auto flex flex-col justify-center'>
            <div className='xl:w-[43.9375rem] flex flex-col mx-auto mb-14'>
                <h1 className='text-[2.625rem] leading-[3.25rem] text-white text-center'>
                    Our Great Clients
                </h1>
                <p className='text-lg text-white text-center'>
                    Startup includes great form options for your startup projects. Each components is coded web which makes creating a website quick and easy.
                </p>
            </div>
            <div className='xl:w-[73.1875rem] mx-auto flex justify-center items-center'>
                <div className='flex flex-wrap gap-4 justify-evenly'>
                    {data.images.map((item) => (
                        <div className='max-w-[16.875rem] border border-white  py-[2rem] px-[3rem] flex justify-center items-center' key={item.number}>
                            <div className='w-[11.5625rem] h-[5rem] flex justify-center items-center'>
                                <Image src={item.Url} width={item.width} height={item.height}  alt="brand logo" className='' />
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    </section>
  )
}

export default ClientsPanel
