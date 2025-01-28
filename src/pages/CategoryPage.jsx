import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination  from '../components/Pagination';

function CategoryPage() {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <>
      <Header/>
      <div className=' w-11/12 py-12 max-w-[670px] items-center mx-auto my-12  '>
          
        <button 
          className='  py-2 px-3 rounded-md bg-black text-white font-bold'
          onClick={() => navigation(-1)}>
          Back
        </button>
        <h2 className=' mt-6 text-center rounded-md  py-2 text-2xl font-bold  bg-yellow-300 '>
          Blogs on <span className=' '>{category}</span>
        </h2>
           
        <Blogs/>
        
      </div>
      <Pagination/>
    </>
    
  )
}

export default CategoryPage