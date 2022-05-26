import React from 'react'
import './Blog.css'
import BlogCard from '../../components/Blog/BlogCard/BlogCard'
import MiniCard from '../../components/Blog/MiniCard/MiniCard'
import b1 from '../../img/blog/b1.jpg'
import b2 from '../../img/blog/b2.jpg'
import b3 from '../../img/blog/b3.jpg'
import b4 from '../../img/blog/b4.jpg'
import b5 from '../../img/blog/b5.jpg'
import { VscSearch } from "react-icons/vsc";

const Blog = () => {
  const allBlogs = [
    {
      img: b1, 
      title: 'Why we love Fashion', 
      date: 'January 22, 2022',
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis nisl eget sapien accumsan viverra. Aenean fringilla felis vel urna…'
    },
    {
      img: b2, 
      title: 'Our Fashion Designer Team',
      date: 'January 10, 2022', 
      disc: '"Designers conduct research on fashion trends and interpret them for their audience".[1] They attempt to design clothes which are functional…'
    },
    {
      img: b3, 
      title: 'Standard Post Example',
      date: 'January 02, 2022', 
      disc: 'Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec…'
    },
    {
      img: b4, 
      title: 'Image Gallery Post Example', 
      disc: 'Proin nulla nibh, auctor in facilisis sed, ultrices at libero. Donec quis auctor velit. Cras dapibus ipsum sit amet turpis…'
    },
    {
      img: b5, 
      title: 'Awesome Youtube video embaded', 
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, nisi eget pellentesque ornare, est lorem hendrerit nunc, nec egestas…'
    }
  ];
  return (
    <div className='blog'>
      <div className='blogTitle'>
        <h2>Blog</h2>
        <p><strong>Home </strong>&gt; Blog</p>
      </div>
      <div className='blogArea'>
        <section className='allBlogs'>
          {allBlogs.map((blog, index) => 
            <BlogCard key={index} img={blog.img} title={blog.title} disc={blog.disc} />
          )}
        </section>
        <section className='latestBlogs'>
          <span className='searchBar'>
            <input type="text" />
            <button><VscSearch /></button>
          </span>
          <h4>Latest Posts</h4>
          {allBlogs.slice(0, 3).map((blog, index) => 
            <MiniCard key={index} img={blog.img} title={blog.title} date={blog.date}/>
          )}
        </section>
      </div>
    </div>
  )
}

export default Blog;