import React, { useEffect, useState } from 'react'
import './Blog.css'
import {Loader, BlogCard, MiniCard} from '../../components'
import axios from 'axios'
import { getallblogs } from '../../constant/routes'
import { VscSearch } from "react-icons/vsc";

const Blog = () => {
  const [allBlogs, setAllBlogs] = useState(null);
  useEffect(() => {
    async function response () {
      const result = await axios.get(getallblogs)
        .then((res) => { return res })
        .catch((err) => console.error(err));
      setAllBlogs(result.data);
    }
    response();
  },[]);
  return (
    <div className='blog'>
      <div className='blogTitle'>
        <h2>Blog</h2>
        <p><strong>Home </strong>&gt; Blog</p>
      </div>
      <div className='blogArea'>
        <section className='allBlogs'>
          {allBlogs !== null ? 
          allBlogs.map((blog, index) =>
          <BlogCard key={index} img={blog.img} title={blog.title} disc={blog.description} author={blog.author} id={blog._id} date={blog.date.slice(0,10)}/>
          )
          :
          <div className='loader'>
            <Loader />
          </div>
          }
        </section>
        <section className='latestBlogs'>
          <span className='searchBar'>
            <input type="text" />
            <button><VscSearch /></button>
          </span>
          <h4>Latest Posts</h4>
          {allBlogs !== null ? 
          allBlogs.slice(0, 3).map((blog, index) =>
            <MiniCard key={index} img={blog.img} title={blog.title} date={blog.date.slice(0,10)} />
          ):
          <Loader />
        }
        </section>
      </div>
    </div>
  )
}

export default Blog;