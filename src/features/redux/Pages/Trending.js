import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../action/getProductAction';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom'
const Trending = () => {
    const { products, loading, error } = useSelector(state => state.products)
    const [item, setItem] = useState([])
    const [active, setActive] = useState("men's clothing")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(item)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    useEffect(() => {
        if (products.length) {
            setItem(products)
        }
    }, [products])
    useEffect(() => {
        dispatch(getProduct())

    }, [])

    const handleProduct = (product) => {
        console.log(product)
        if (product === "men's clothing") {
            const data = products.filter(item => item.category.toLowerCase().includes(product.toLowerCase()))
            console.log(data)
            setItem(data)
            setActive("men's clothing")
            return
        }
        if (product === "women's clothing") {
            const data = products.filter(item => item.category.toLowerCase().includes(product.toLowerCase()))
            setItem(data)
            setActive("women's clothing")
            return
        }
        if (product === "jewelery") {
            const data = products.filter(item => item.category.toLowerCase().includes(product.toLowerCase()))
            setItem(data)
            setActive("jewelery")
            return
        }
        if (product === "electronics") {
            const data = products.filter(item => item.category.toLowerCase().includes(product.toLowerCase()))
            setItem(data)
            setActive("electronics")
            return
        }
    }
    return (
        <div id='product' className='container '>
            <div className='trending'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h1>Trending This Week</h1>
                    </div>
                    <div>
                        <div className='d-flex gap-5 relative' >
                            <ul className='d-flex gap-5 list-unstyled '>
                                <li className='li'>
                                    <button onClick={() => handleProduct("men's clothing")} className={`${active === "men's clothing" ? 'active-btn' : ''} product-btn `}>Men's</button>

                                </li>
                                <li className='li'>
                                    <button onClick={() => handleProduct("women's clothing")} className={`${active === "women's clothing" ? 'active-btn' : ''} product-btn `}>Women</button>
                                </li>
                                <li className='li'>
                                    <button onClick={() => handleProduct('jewelery')} className={`${active === "jewelery" ? 'active-btn' : ''} product-btn `}>Jewelery</button>
                                </li>
                                <li className='li'>
                                    <button onClick={() => handleProduct('electronics')} className={`${active === "electronics" ? 'active-btn' : ''} product-btn `}>Electronics</button>
                                </li>
                            </ul>



                        </div>
                    </div>
                </div>
            </div>
            <div className='my-5 '>
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
                        item?.map(({ title, id, price, image }) => <div
                            key={id}
                        >
                            <div class="card shop-card">
                                <img src={image} class="card-img-top" alt="..." />
                                <div class="card-body mt-2">
                                    <h5 class="font text-center">{title}</h5>
                                    <p class="card-text text-center fw-bold">${price}</p>
                                    <div className='text-center'>
                                        <button onClick={()=>navigate(`details/${id}`)} className='btn bg-dark text-white'>Details</button>
                                    </div>
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