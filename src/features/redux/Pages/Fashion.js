import React from 'react';
import img3 from '../../../assets/img3.webp'
import img4 from '../../../assets/img4.webp'
import img5 from '../../../assets/img5.webp'
const Fashion = () => {

    return (
        <div className='container'>
            <div className='row g-5 card-parent my-5'>
                <div className='col-md-4 '>
                    <div class="card relative border-0 rounded-0">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div className='man-card'>
                            <h1>Men's Fashion</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 '>
                    <div class="card border-0 rounded-0">
                        <img src={img4} class="card-img-top" alt="..." />
                        <div className='man-card'>
                            <h1>Women's Fashion</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div class="card border-0 rounded-0">
                        <img src={img5} class="card-img-top" alt="..." />
                        <div className='man-card'>
                            <h1>Baby Fashion</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fashion;