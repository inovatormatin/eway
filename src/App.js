import React, { useEffect } from 'react'
import { Routes, Route, } from "react-router-dom"
import { Home, Shop, Blog, Blogpage, About, Contact } from "./pages"
import { Navbar, Footer, Toast } from "./components"
import { useDispatch } from 'react-redux'
import { getallProducts } from './actions/productActions'


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallProducts());
  }, []);
  return (
    <>
      <Navbar />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          exact
          path="/blog/:id"
          element={<Blogpage />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;