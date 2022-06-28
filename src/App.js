import React from 'react'
import { Routes, Route, } from "react-router-dom"
import { Home, Shop, Blog, Blogpage, About, Contact } from "./pages"
import { Navbar, Footer, Toast } from "./components"
import UserState from './context/user/UserState'


const App = () => {
  return (
    <UserState>
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
    </UserState>
  )
}

export default App;