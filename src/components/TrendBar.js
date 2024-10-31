import React from 'react'
import { IoIosTrendingUp } from "react-icons/io";

const TrendBar = () => {
  return (
    <section className='px-10 py-2 border-b lg:px-20 lg:py-3 border-dark'>
        <div className='flex items-center gap-5'>
            <IoIosTrendingUp className='w-4 h-auto lg:w-6' />
            <div className='flex items-center w-full gap-3 overflow-hidden lg:gap-5'>
                {Array.from({length: 10}).map((_, index) => (
                    <div 
                        key={index}
                        className='p-2 text-xs rounded-full lg:text-sm bg-dark bg-opacity-10 font-firago case-on whitespace-nowrap'
                    > 
                        ტრენდული თემა
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default TrendBar
