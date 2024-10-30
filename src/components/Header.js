import React from 'react'
import { CiSearch } from "react-icons/ci";
import Logo from './Logo';

const Header = () => {
  return (
    <section>
      <div className='flex items-center justify-between px-20 py-5 border-b border-dark'>
        <Logo />

        <div className='flex items-center gap-8'>
          <nav>
              <ul className='flex gap-8 text-lg font-semibold text-dark font-firago case-on'>
                  <li className=''>
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
          
          <div className='flex items-center gap-1 px-4 py-1 border border-dark'>
            <input 
              type="text" 
              placeholder='Search...' 
              className='bg-transparent outline-none text-md text-dark w-[200px] font-firago' 
            />
            <CiSearch className='w-auto h-6 text-dark' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
