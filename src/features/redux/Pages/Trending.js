import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../action/getProductAction';
import Slider from 'react-slick';
const Trending = () => {
    const { products, loading, error } = useSelector(state => state.products)
    const dispatch = useDispatch()
    console.log(products)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            
            {
            breakpoint:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll: 1,
            }
        },
            {
            breakpoint:968,
            settings:{
                slidesToShow:2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings:{
                slidesToShow:1,
                slidesToScroll: 1,
            }
        },
    ]
    };
    useEffect(() => {
        dispatch(getProduct())
    }, [])


    return (
        <div className='container'>
            <div className='trending'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h1>Trending This Week</h1>
                    </div>
                    <div>
                        <div className='d-flex gap-5' >
                            <button className='product-btn'>Men</button>
                            <button className='product-btn'>Men</button>
                            <button className='product-btn'>Men</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                    loading && <h1 className='text-center'>Loading...</h1>
                    
                }
                {
                    error && <h1 className='text-center'>{error}</h1>
                    
                }
                <Slider
                    {...settings}
                    className=''
                >
                    {
                        products.map(({ title, id, price, image }) => <div
                            key={id}
                        >
                            <div class="card shop-card">
                                <img src={image} class="card-img-top" alt="..."/>
                                    <div class="card-body mt-2">
                                        <h5 class="fs-6 text-center">{title}</h5>
                                        <p class="card-text text-center fw-bold">${price}</p>

                                    </div>
                            </div>
                        </div>)
                    }
                </Slider>

            </div>
        </div>
    );
};

export default Trending;