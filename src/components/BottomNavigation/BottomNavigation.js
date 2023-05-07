import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { GoHome } from "react-icons/go";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineRead } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./bottomNavigationBar.css";

const BottomNavigationbar = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="bottomNavigationBar">
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className="bottomNavigationBarBox"
        >
          <BottomNavigationAction label="HOME" icon={<GoHome />} />
          <BottomNavigationAction label="SHOP" icon={<BiShoppingBag />} />
          <BottomNavigationAction label="BLOG" icon={<AiOutlineRead />} />
          <BottomNavigationAction
            label="CART"
            icon={<AiOutlineShoppingCart />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default BottomNavigationbar;
