import React from 'react'
import './blogpage.css'
import { useLocation } from "react-router-dom";

const Blogpage = () => {
    const location = useLocation();
    const { author, disc, id, img, title, date } = location.state.data;
    return (
        <div id={id} className="blogpage">
            <div className='blogPageTitle'>
                <h2>{title}</h2>
                <p><strong>Home </strong>&gt; Blog &gt; {title}</p>
            </div>
            <div className="blog-content">
                <img className='blogImage' src={img} alt={title} />
                <p>{disc.replace("<br />", `\n`)}</p>
                <span>Posted at {date}, </span>
                <span>{author}</span>
            </div>
        </div>
    );
}

export default Blogpage;