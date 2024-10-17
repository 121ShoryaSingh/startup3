import Link from 'next/link'
import React from 'react'

const data = {
    title: 'Startup Framework',
    description:'We made it so beutiful and simple. It combines landing pages, blogs and shop screens. It is definitly the tool you need in your collections',
    price: 'Purchase Now for $ 240'
}

const hero = () => {
  return (
    <section className='mx-auto lg:h-[600px] xl:h-screen max-w-7xl px-10 md:px-28'>
      <div className='h-full w-full mx-auto flex flex-col justify-center items-center lg:max-w-[48.125rem]'>
        <h1 className='text-4xl font-bold text-[#1e0e62] mt-16  md:text-6xl lg:text-7xl ' >{data.title}</h1>
        <p className='text-[#151439]  opacity-80 mt-[2.3625rem] max-w-[25rem] md:max-w-[36.3375rem] sm:text-center md:text-[22px] md:leading-[32px]'>{data.description}</p>
        <button className='w-full h-12 bg-[#25dac5] text-white rounded-lg mt-[2.5rem] lg:mt-[4.95rem] sm:w-[18.75rem] lg:h-[3.75rem] lg:rounded-full'>
          {data.price}
        </button>
        <Link href='/learn' className='text-[#25dac5] mt-4 mb-32 hover:underline underline-offset-2'>Learn More </Link>

      </div>
    </section>
  )
}

export default hero
