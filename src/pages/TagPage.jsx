import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Header from '../components/Header';
import Blogs from '../components/Blogs';

function TagPage() {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <>
      <Header/>
      <div className=' w-11/12 py-12 max-w-[670px] mx-auto my-12 '>
        <button 
          className='  py-2 px-3 rounded-md bg-black text-white font-bold'
          onClick={() => navigation(-1)}>
            Back
        </button>

        <h2 className=' mt-6 text-center rounded-md  py-2 text-2xl font-bold  bg-yellow-300 '>
            Blogs Tagged <span> #{tag}</span>
        </h2>

        <Blogs/>
      </div> 
      
      <Pagination/>
       
    </>
  )
}

export default TagPage