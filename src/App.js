import React, { useEffect } from 'react'
import { Routes, Route, } from "react-router-dom"
import { Home, Shop, Blog, Blogpage, Productpage, MyCart, About, Contact } from "./pages"
import { Navbar, Footer, Toast } from "./components"
import { useDispatch, useSelector } from 'react-redux'
import { getallProducts } from './actions/productActions'
import Cookies from "universal-cookie";
import { getCartbyUser } from "./actions/cartAction";


const App = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  let tkn = cookies.get("tkn");
  const userState = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (tkn !== undefined) {
      dispatch(getCartbyUser("getCartbyUser"));
    }
    dispatch(getallProducts());
  }, [userState]); // eslint-disable-line
  return (
    <>
      <Navbar />
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route exact path="/blog/:id" element={<Blogpage />}/>
        <Route exact path="/shop/:id" element={<Productpage />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;