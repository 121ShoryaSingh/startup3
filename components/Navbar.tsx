"use client"

import Link from 'next/link'
import React, { useState } from 'react'



const data = {
        Links: [
            {number: 1, Title: "Home", url: "/"},
            {number: 2, Title: "Features", url: '/features'},
            {number: 3, Title: "Blog", url: '/blog'},
            {number: 4, Title: "Shop", url: '/shop'}
        ]
    }  


const Navbar = () => {
    const [isSearchVisible, SetSearchVisiable] = useState(false)
    const toggleSearch = () => {
        SetSearchVisiable(!isSearchVisible);
    }

    const [isOpen, setIsOpen] = useState(false)
    const togglemenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <section className="sticky bg-white top-0 z-10">
      <div className="w-full max-w-7xl md:px-28 px-10 mx-auto  h-14 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-nowrap h-10">
          <span className="text-2xl text-[#1e0962] cursor-pointer min-w-28">
            Startup 3
          </span>
        </div>
        {/* Search and Links */}
        <div className="lg:flex  w-[47.625rem] hidden items-center justify-between">
          <div className="flex justify-center items-center h-full">
            {data.Links.map((item) => (
              <Link
                className="text-[#151439] text-opacity-80 ml-8"
                key={item.number}
                href={item.url}
              >
                {item.Title}
              </Link>
            ))}

            <div className="ml-3">
              <input
                type="text"
                placeholder="search..."
                className={`transition-all duration-300 ease-in-out border rounded-lg px-3 focus:outline-none ${
                  isSearchVisible ? "w-48 opacity-100" : "w-0 opacity-0"
                }`}
              />
              <button
                onClick={toggleSearch}
                className="ml-2 bg-white p-2 rounded-lg focus:outline-none hover:bg-gray-300 hover:text-white"
              >
                <img src="/fa-search.svg" alt="search" className="" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href="/signin"
              className="text-[#151439] text-opacity-80 mr-5 flex flex-nowrap"
            >
              Sign in
            </Link>
            <button className="w-28 h-full bg-[#25dac5] text-white px-5 py-2 flex flex-nowrap rounded-[50px] justify-center items-center">
              Sing Up
            </button>
          </div>
        </div>
      {/* hamburg Icon */}
      <button className="h-6 w-6 lg:hidden block" onClick={togglemenu}>
        <img src="/burgerMenu.svg" alt="hamburg menu" />
      </button>
    </div>
    {isOpen && (
      <div className='lg:hidden'>
        <div className='flex justify-center items-center flex-col w-full h-40 border-b-4 border-gray-400'>
          {data.Links.map((item) => (
            <Link key={item.number} href={item.url}  className='w-full flex justify-center mb-2 items-center border border-gray-400 hover:border-black text-gray-600 hover:text-black font-bold text-md  hover:transform hover:scale-125 transition-all'>
              {item.Title}
            </Link>
          ))}
        </div>
      </div>
    ) }
    </section>
  );
}

export default Navbar
