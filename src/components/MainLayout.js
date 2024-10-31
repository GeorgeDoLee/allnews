import React from 'react'
import Header from './Header'
import Footer from './Footer'
import TrendBar from './TrendBar'

const MainLayout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen bg-newspaper'>
      <Header />
      <TrendBar />
      <div className='flex-grow '>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout