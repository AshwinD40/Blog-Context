import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="w-full  flex flex-col  my-12 py-12 bg-slate-300 rounded-lg  ">
      {loading 
        ? (<div className=" w-full flex justify-center items-center">
          <p 
            className="mt-24 font-bold text-3xl justify-center items-center ">
              Loading
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div 
          className=" w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">
            No Blogs Found !
          </p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post = {post}/>
        ))
      )}
    </div>
  );
}
