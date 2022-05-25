import React from 'react';
import banner1 from '../../../img/homeSlide/slider3.jpg';
import banner2 from '../../../img/homeSlide/slider4.jpg';
import './HomeSlider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade, Navigation, Autoplay} from "swiper";

const HomeSlider = () => {
  return (
    <>
      <Swiper 
      effect='fade'
      navigation={true} 
      loop={true} 
      speed={900}
      autoplay={{delay: 8000, disableOnInteraction : false}} 
      modules={[Navigation, Autoplay, EffectFade]}
      className="mySwiper">
        <SwiperSlide>
            <div className='banner'>
                <img className='bannerImg' src={banner1} alt="banner1" />
                <section className='offer rightSideOffer'>
                    <span>SUMMER 30</span>
                    <h1>NEW HOT <br />EVERYTHING</h1>
                    <p>CHECK OUT SUMMER <br /> COLLECTION FIRST COME TO GET <br /> THE BEST!</p>
                    <div>
                        <button className='readMore'>READ MORE</button>
                        <button className='showMore'>SHOP NOW</button>
                    </div>
                </section>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='banner'>
                <img className='bannerImg' src={banner2} alt="banner2" />
                <section className='offer leftSideOffer'>
                    <span>SUMMER 30</span>
                    <h1>NEW HOT <br />EVERYTHING</h1>
                    <p>CHECK OUT SUMMER <br /> COLLECTION FIRST COME TO GET <br /> THE BEST!</p>
                    <div>
                        <button className='readMore'>READ MORE</button>
                        <button className='showMore'>SHOP NOW</button>
                    </div>
                </section>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default HomeSlider;