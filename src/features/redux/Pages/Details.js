import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import singleProductAction from '../action/singleProductAction';
const Details = () => {
    const { id } = useParams()
    const data = useSelector(state => console.log(state))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(singleProductAction(id))
    }, [])
    return (
        <div>
            <h1>This is details</h1>
        </div>
    );
};

export default Details;