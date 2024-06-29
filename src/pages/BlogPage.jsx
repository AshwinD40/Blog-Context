import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

function BlogPage() {
  
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    const [blog , setBlog ] = useState(null);
    const [relatedblogs , setRelatedblogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading , loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("Url Is:");
        console.log(url);
        try{
            const res  = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedblogs(data.relatedBlogs);
             
        }
        catch(error){
            console.log(" Error Aa rha BC");
            setBlog(null);
            setRelatedblogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])

  return (
    
    <div>
         <Header/>
         <div>
            <button onClick={() => navigation(-1)}>
                Back
            </button>
         </div>
         {
            loading ?
             ( <p>loading</p> )
            :
            blog ?
             (
                <div>
                    <BlogDetails post={blog}/>
                    <h2 className=' text-3xl font-bold'>Related Blogs</h2>
 
                    {
                        relatedblogs.map((post) => (
                            <div key={post.id}>
                                <BlogDetails post = {post}/>
                            </div>
                        ))
                    }
                
                </div>
             ) :

                (<div>
                    No Blog Found
                </div> )
               
         }
    </div>
  )
}

export default BlogPage