import React from 'react';
import Banner from '../Pages/Banner/Banner';
import Fashion from '../Pages/Fashion';
import Trending from '../Pages/Trending';

const Home = () => {
    return (
        <div className='home'>
            <Banner/>
            <Fashion/>
            <Trending/>
        </div>
    );
};

export default Home;