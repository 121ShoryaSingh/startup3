import React from 'react'

const ComponentsPanel = () => {
  return (
    <section className=' building flex justify-center items-center'>
      <div className=' max-w-7xl py-[6.25rem] px-8 flex flex-col gap-20 lg:flex-row'>
        <div className='md:w-[29.375rem] flex flex-col'>
          <h1 className='text-white text-xl font-bold'>Components</h1>
          <p className='text-white text-lg text-balance mt-5'>
            Startup Design Framework contains components and complex blocks which can easily be integrated into almost any design. 
            All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of 
            solutions for your future projects.  Also we prepared some high-quality photos that you can use in your projects.
          </p>
        </div>
        <div className='md:w-[20.125rem] bg-white rounded-[20px] py-11 px-10 flex flex-col'>
          <p className='text-[1.375rem] leading-[2rem] text-center text-[#482be7] text-balance'>
            We haven't forgotten about reponsive layout. With Statup Framework, you can create website with full mobile support.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ComponentsPanel
