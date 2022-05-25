import React from 'react';
import HomeSlider from '../../components/HomeComp/HomeSlider/HomeSlider';
import Categories from '../../components/HomeComp/Categories/Categories';
import Ourstore from '../../components/HomeComp/Ourstore/Ourstore';
import Banner from '../../components/HomeComp/Banner/Banner';
import Newproduct from '../../components/HomeComp/Newproduct/Newproduct';

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Categories />
      <Ourstore />
      <Banner />
      <Newproduct />
    </>
  )
}

export default Home;