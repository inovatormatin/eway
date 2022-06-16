import React from 'react'
import './blogpage.css'
import { useLocation } from "react-router-dom";

const Blogpage = () => {
    const location = useLocation();
    return(
        <>
        {console.log(location.state.data.id)}
        Blogpage
        </>
    );
}

export default Blogpage;