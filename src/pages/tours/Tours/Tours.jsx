import React, { useEffect, useState } from 'react';
import Tour from './Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div className='py-16 container mx-auto'>
            <div className='text-center'>
                <h3 className='text-1xl font-bold text-[#64ab45] bg-[#dde5da] px-4 py-2 w-1/3 mx-auto rounded'>Featured tours</h3>
                <h1 className="my-8 text-3xl md:text-5xl font-bold">Amazing tour places around the world</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    tours.map(tour => <Tour
                        key={tour._id}
                        tour={tour}
                    ></Tour>)
                }
            </div>
        </div>
    );
};

export default Tours;