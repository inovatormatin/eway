import React from 'react';
import './Banner.css';

const Banner = () => {
    return(
        <div className='bannerSection'>
            <div className='bsc'>
                <img className='bscImg' src="https://res.cloudinary.com/inovatormatin/image/upload/v1653646907/eway/banner/banner1_sh77zm.jpg" alt="banner1" />
                <div className='bannerOptions'>
                    <span>Sunglass</span>
                    <h4>Our Brand new Collection</h4>
                    <button>Shop Now</button>
                </div>
            </div>
            <div className='bsc'>
                <img className='bscImg' src="https://res.cloudinary.com/inovatormatin/image/upload/v1653646908/eway/banner/banner2_tev0t8.jpg" alt="banner2" />
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