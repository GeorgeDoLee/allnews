import React from 'react'
import MainLayout from "../components/MainLayout"
import BlindspotBar from '../components/BlindspotBar'
import MainArticle from '../components/MainArticle'
import TopNewsBar from '../components/TopNewsBar'
import Articles from '../components/Articles'
import PublisherBar from '../components/PublisherBar'
import TrendBar from '../components/TrendBar'

const Home = () => {
  return (
    <MainLayout>
      <TrendBar />
      <div className='flex flex-col gap-5 px-20 py-5'>
        <div className='flex justify-between gap-5'>
          <div className='w-[75%] flex items-center justify-center'>
            <MainArticle />
          </div>

          <div className='border-r border-dark' />

          <div className='w-[25%]'>
            <TopNewsBar />
          </div>
        </div>

        <div className='border-b border-dark' />

        <div className='flex justify-between gap-5'>
          <div className='w-[20%] flex flex-col gap-5'>
            <PublisherBar />
            <div className='border-b border-dark' />
            <BlindspotBar />
          </div>
          
          <div className='border-r border-dark' />

          <div className='w-[80%]'>
            <Articles />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
