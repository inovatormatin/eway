import React, { useEffect } from 'react'
import { Routes, Route, } from "react-router-dom"
import { Home, Shop, Blog, Blogpage, Productpage, MyCart, PlaceOrder, SearchPage, Profile, About, Contact } from "./pages"
import { Navbar, Footer, Toast, UnderDev } from "./components"
import { useDispatch, useSelector } from 'react-redux'
import { getallProducts } from './actions/productActions'

const App = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userLogin);
  useEffect(() => {
    dispatch(getallProducts());
  }, [userState]); // eslint-disable-line
  return (
    <>
      <div className='displayBody'>
        <Navbar />
        <Toast />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route exact path="/blog/:id" element={<Blogpage />} />
          <Route exact path="/shop/:id" element={<Productpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      <UnderDev />
    </>
  )
}

export default App;