import React from 'react';
import 'antd/dist/antd.css';

import { Carousel } from 'antd';

import "./HeroSection.css";


function HeroSection() {
  return (
    <div className='carousel-container'>
        <Carousel  breakPoints='2' autoplay className='carousel-image'>
            <div className='image-container'>
                <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/f/a/fantastic-beast-3_980x448.jpg'></img>
            </div>
            <div className='image-container'>
                <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/n/s/nsd_main_980x448_2.jpg'></img>
            </div>
            <div className='image-container'>
                <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_26.png'></img>
            </div>
            <div className='image-container'>
                <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_2__8.jpg'></img>
            </div>
        </Carousel>
    </div>
  )
}

export default HeroSection