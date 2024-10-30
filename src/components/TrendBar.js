import React from 'react'
import { IoIosTrendingUp } from "react-icons/io";

const TrendBar = () => {
  return (
    <section className='px-20 py-3 border-b border-dark'>
        <div className='flex items-center gap-5'>
            <IoIosTrendingUp className='w-6 h-auto' />
            <div className='flex items-center w-full gap-5 overflow-hidden'>
                {Array.from({length: 10}).map((_, index) => (
                    <div 
                        key={index}
                        className='p-2 text-sm rounded-full bg-dark bg-opacity-10 font-firago case-on whitespace-nowrap'
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
