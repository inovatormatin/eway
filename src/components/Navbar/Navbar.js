import React, { useState, useContext } from "react";
import Login from '../Login/Login'
import Userdropdown from "../Userdropdown/Userdropdown";
import { NavLink } from "react-router-dom";
import userContext from "../../context/user/userContext";
import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser
} from "react-icons/ai";
import logo from '../../SVG/whiteEway.svg'
import './Navbar.css'

const Navbar = () => {
  const userInfo = useContext(userContext);
  const [userform, setUserform] = useState(false);
  const [userdropdown, setUserdropdown] = useState(false);
  const menu = [
    { url: '/', lName: `Home` },
    { url: '/shop', lName: 'Shop' },
    { url: '/blog', lName: 'Blog' },
    { url: '/about', lName: 'About us' },
    { url: '/contact', lName: 'Contact' },
  ];
  const activeLi = {
    color: "#61ce70",
  };
  return (
    <>
      <nav className='navbar'>
        <img id="navLogo" src={logo} alt="logo" />
        <div className="optionsBox">
          <ul className='navbarOptions'>
            {menu.map((item, index) =>
              <li key={index} >
                <NavLink
                  to={item.url}
                  style={({ isActive }) => isActive ? activeLi : undefined}>
                  {index === 0 ? <AiFillHome style={{ marginRight: "5px" }} /> : ""}
                  {item.lName}
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="extraOption">
            <li><AiOutlineSearch /></li>
            <li><AiOutlineShoppingCart /></li>
            <li onClick={() => {
              if (!userInfo.isUserLoggedIn) {
                setUserform(true)
              } else {
                userdropdown ?
                  setUserdropdown(false) :
                  setUserdropdown(true)
              }
            }}>
              <AiOutlineUser />
            </li>
          </ul>
        </div>
        {userdropdown ?
          <Userdropdown update={setUserdropdown} />
          :
          null
        }
      </nav>
      {userform ?
        <Login update={setUserform} />
        :
        null
      }
    </>
  )
}

export default Navbar;