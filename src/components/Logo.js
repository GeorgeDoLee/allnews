import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link 
        to='/'
        className='relative flex'
    >
        <div className='z-10 w-12 h-12 rounded-full bg-opp' />
        <div className='z-20 w-12 h-12 -ml-5 bg-opacity-50 bg-center rounded-full' />
        <div className='z-10 w-12 h-12 -ml-5 rounded-full bg-gov' />

        <div className="absolute z-0 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 bg-center rounded-full top-1/2 left-1/2"></div>
    </Link>
  )
}

export default Logo
