import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import Logo from './Logo';
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <section>
      <div className='relative flex items-center justify-between px-10 py-3 border-b lg:px-20 lg:py-5 border-dark'>
        <Logo />  
        <RxHamburgerMenu 
          onClick={() => setShowNav((prev) => !prev)}
          className='w-10 h-auto text-dark lg:hidden' 
        />

        <div className={`${showNav ? 'left-0' : 'left-full lg:left-0'} flex lg:flex-row flex-col lg:items-center gap-8 
          absolute lg:relative top-[73px] lg:top-0 left-0 bg-dark lg:bg-transparent h-svh w-svw lg:h-auto lg:w-auto px-10 py-5
          lg:p-0 duration-300`}
        >
          <nav>
              <ul 
                className='flex flex-col gap-8 font-semibold text-newspaper lg:text-lg text-md lg:text-dark lg:flex-row font-firago case-on'
              >
                  <li>
                      მთავარი
                  </li>
                  <li>
                      ახალი ამბები
                  </li>
                  <li>
                      ბრმა წერტილები
                  </li>
                  <li>
                      ჩვენს შესახებ
                  </li>
              </ul>
          </nav>
          
          <div className='flex items-center justify-between gap-1 px-4 py-1 border border-newspaper lg:border-dark'>
            <input 
              type="text" 
              placeholder='Search...' 
              className='w-full bg-transparent outline-none placeholder:text-newspaper lg:placeholder:text-dark text-md text-newspaper lg:text-dark font-firago' 
            />
            <CiSearch className='w-auto h-6 text-newspaper lg:text-dark' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
