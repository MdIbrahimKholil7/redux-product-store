import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import singleProductAction from '../action/singleProductAction';
import { AiFillStar } from 'react-icons/ai';
import { addToCart } from '../reducer/addProductReducer';
const Details = () => {
    const { id } = useParams()
    const { loading, item, error } = useSelector(state => state.item)
    const { title, description, image, price, rating } = item || {}
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(singleProductAction(id))
    }, [])
    const handleCart=(item)=>{
        dispatch(addToCart(item))
        
    }
    return (
        <div>
            {
                loading ? <h1 className='text-center mt-5'>Loading...</h1> : <div className='container mt-5'>
                    <div className='row gx-5'>
                        <div className='col-md-6 col-sm-12 pe-4' >
                            <img className='w-full img-fluid' src={image} alt="" />
                        </div>
                        <div className='col-md-6 col-sm-12 d-flex justify-content-center align-items-center'>
                            <div className=''>
                                <h1 className='fs-3'>{title}</h1>
                                <p className='fs-5 fw-bold'>Rating {rating?.rate} <AiFillStar /></p>
                                <h1>$ {price}</h1>
                                <div>
                                    <p>
                                        {description}
                                    </p>
                                    <button onClick={()=>handleCart(item)}  className='btn btn-dark'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Details;