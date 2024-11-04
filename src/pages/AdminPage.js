import React from 'react'
import MainLayout from '../components/MainLayout'
import PublisherManager from '../components/PublisherManager'

const AdminPage = () => {

  return (
    <MainLayout>
        <section className='px-20 py-5'>
          <PublisherManager />
        </section>
    </MainLayout>
  )
}

export default AdminPage
