import React from 'react'
import { Slider, FeaturedProducts, Catagories } from '../components';

const Home = () => {
    return (
        <div>            
            <Slider />
            <Catagories />
            <FeaturedProducts />
        </div>
    )
}

export default Home