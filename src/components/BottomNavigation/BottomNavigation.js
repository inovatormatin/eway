import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import { GoHome } from "react-icons/go";
// import { HiOutlineShoppingCart } from "react-icons/hi";
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
        >
          <BottomNavigationAction label="Home" icon={<GoHome />} />
          <BottomNavigationAction label="Shop" icon={<BiShoppingBag />} />
          <BottomNavigationAction label="Blog" icon={<AiOutlineRead />} />
          <BottomNavigationAction
            label="Cart"
            icon={<AiOutlineShoppingCart />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default BottomNavigationbar;
