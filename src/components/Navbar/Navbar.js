import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
      </nav>
  )
}

export default Navbar;