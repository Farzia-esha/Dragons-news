import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-4 items-center bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>latest</p>
            <Marquee className='gap-5' pauseOnHover={true} speed={60}>
            <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, ipsa.
            </p>
            <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, ipsa.
            </p>
            <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, ipsa.
            </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;