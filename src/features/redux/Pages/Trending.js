import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../action/getProductAction';
const Trending = () => {
    const data = useSelector(state => console.log(state))
    const dispatch = useDispatch()
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
        </div>
    );
};

export default Trending;