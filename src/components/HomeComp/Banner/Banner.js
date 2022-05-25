import React from 'react';
import './Banner.css';
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'

const Banner = () => {
    return(
        <div className='bannerSection'>
            <div className='bsc'>
                <img className='bscImg' src={banner1} alt="banner1" />
                <div className='bannerOptions'>
                    <span>Sunglass</span>
                    <h4>Our Brand new Collection</h4>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className='bsc'>
                <img className='bscImg' src={banner2} alt="banner2" />
                <div className='bannerOptions'>
                    <span>Jewellry</span>
                    <h4>Women top Collection</h4>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;