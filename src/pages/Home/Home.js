import React from 'react';
import HomeSlider from '../../components/HomeComp/HomeSlider/HomeSlider';
import Categories from '../../components/HomeComp/Categories/Categories';
import Ourstore from '../../components/HomeComp/Ourstore/Ourstore';

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Categories />
      <Ourstore />
    </>
  )
}

export default Home;