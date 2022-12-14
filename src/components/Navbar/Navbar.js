import React, { useState, useEffect } from "react";
import { Login, Userdropdown } from '../../components'
import { NavLink, Link } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser
} from "react-icons/ai";
import logo from '../../SVG/whiteEway.svg'
import './Navbar.css'
import { useSelector } from "react-redux";
import Cookies from 'universal-cookie'

const Navbar = () => {
  const cookies = new Cookies()
  const userState = useSelector(state => state.userLogin);
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
  let tkn = cookies.get('tkn');
  
  useEffect(() => {
    if(tkn !== undefined){
      setUserform(false)
    }
  }, [userState]); // eslint-disable-line

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
            <li><Link to={"/mycart"}><AiOutlineShoppingCart /></Link></li>
            <li onClick={() => {
              if(tkn !== undefined){
                userdropdown ? setUserdropdown(false) : setUserdropdown(true);
              } else {
                userform ? setUserform(false) : setUserform(true);
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