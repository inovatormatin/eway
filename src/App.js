import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Shop,
  Blog,
  Blogpage,
  Productpage,
  MyCart,
  PlaceOrder,
  SearchPage,
  Profile,
  About,
  Contact,
} from "./pages";
import { Navbar, Footer, Toast, UnderDev } from "./components";
import { useDispatch } from "react-redux";
import { getallProducts } from "./actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  // Online state
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      console.log("Manish");
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener("online", handleStatusChange);

    // Listen to the offline status
    window.addEventListener("offline", handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);

  useEffect(() => {
    dispatch(getallProducts());
  }, []); // eslint-disable-line
  return (
    <>
      <div className="displayBody">
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
  );
};

export default App;
