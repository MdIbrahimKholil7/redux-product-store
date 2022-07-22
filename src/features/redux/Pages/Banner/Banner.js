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

                    <div class="img1 relative">
                        <div className='fashion-desc'>
                            <div>
                                <h1 className='fashion-font'>Fashion Sale</h1>
                                <h1 className='font'>Minimal Menz Style</h1>
                                <div>
                                    <p className='fs-6'>Consectetur adipisicing elit. Laborum fuga in cidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                    <div>
                                        <button className='btn bg-dark text-white'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="img2 relative">
                        <div className='fashion-desc-2'>
                            <div>
                                <h1 className='fashion-font'>Fashion Sale</h1>
                                <h1 className='font'>Minimal Womens Style</h1>
                                <div>
                                    <p className='fs-6'>Consectetur adipisicing elit. Laborum fuga in cidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
                                    <div>
                                        <button className='btn bg-dark text-white'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Banner;