import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetails({post}) {
    
  return (
    <div className=' my-4  w-11/12 max-w-[670px] mx-auto items-center justify-center'>
        <NavLink to={`/blog/${post.id}`}>
            <span className=' font-bold text-black text-xl'>{post.title}</span>
        </NavLink>
        <p className=' text-[13px] mt-1 '>
            By
            <span className=' italic' >{post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                <span className=' underline font-bold'>{post.category} </span>
            </NavLink>
        </p>
        <p className=' text-[13px] mt-1 text-zinc-900 '>
            Posted On: {post.date}
        </p>
        <p className=' text-[15px] mt-3'> {post.content}</p>
        <div className=' flex gap-x-3'>
            {post.tags.map( (tag, index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                    <span className=' text-blue-500 underline font-bold text-sm' key={index}>{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
         
    </div>
  )
}

export default BlogDetails