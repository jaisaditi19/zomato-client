import React from 'react';

import DiningCarousel from './DiningCarousel';

function Dining() {
    return (
        <div className='mb-10'>
           <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>
               Dine-Out Restaurants in Delhi NCR
            </h1> 
            <DiningCarousel />
        </div>
    )
}

export default Dining
