import React, { useEffect } from 'react'
import './Blog.css'
import {RingLoader, BlogCard, MiniCard} from '../../components'
import { VscSearch } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux'
import { getallBlogs } from '../../actions/blogActtions'

const Blog = () => {
  const dispatch = useDispatch();
  const blogState = useSelector(state => state.getallBlogs);
  const { blogs } = blogState;
  useEffect(() => {
    dispatch(getallBlogs());
  }, []);
  return (
    <div className='blog'>
      <div className='blogTitle'>
        <h2>Blog</h2>
        <p><strong>Home </strong>&gt; Blog</p>
      </div>
      <div className='blogArea'>
        <section className='allBlogs'>
          {blogs !== null ? 
          blogs.map((blog, index) =>
          <BlogCard key={index} img={blog.img} title={blog.title} disc={blog.description} author={blog.author} id={blog._id} date={blog.date.slice(0,10)}/>
          )
          :
          <div className='loader'>
            <RingLoader />
          </div>
          }
        </section>
        <section className='latestBlogs'>
          <span className='searchBar'>
            <input type="text" />
            <button><VscSearch /></button>
          </span>
          <h4>Latest Posts</h4>
          {blogs !== null ? 
          blogs.slice(0, 3).map((blog, index) =>
            <MiniCard key={index} img={blog.img} title={blog.title} date={blog.date.slice(0,10)} />
          ):
          <RingLoader />
        }
        </section>
      </div>
    </div>
  )
}

export default Blog;