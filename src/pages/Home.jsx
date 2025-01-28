import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

function Home() {
  return (
    <>
      <div className=' w-full h-full flex flex-col  justify-center items-center'>
        <Header />
        <Blogs/>
        <Pagination/>
      </div>
    </>
  )
}

export default Home