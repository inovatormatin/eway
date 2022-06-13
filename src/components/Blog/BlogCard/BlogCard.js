import React from 'react'
import './BlogCard.css'

const BlogCard = ({img, title, disc}) => {
    return(
        <div className='blogCard'>
            <img className='thumbnail' src={img} alt={title} />
            <h4>{title}</h4>
            <p>{disc.slice(0,148) + "..."}</p>
            <button>Read More</button>
        </div>
    );
}

export default BlogCard;