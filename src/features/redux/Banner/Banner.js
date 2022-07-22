import React from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../assets/img1.webp'
import img2 from '../../../assets/img2.webp'
import { Container } from 'postcss';
const Banner = () => {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        cssEase: "linear"
    };
    return (
        <div>
            <div className='parent'>
                <Slider {...settings}>

                    <div class="img1">

                    </div>
                    <div class="img2">

                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Banner;