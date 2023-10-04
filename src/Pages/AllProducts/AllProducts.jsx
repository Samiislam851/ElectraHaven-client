import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InverterCard from '../../Component/InverterCard/InverterCard';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/products').then(res => setProducts(res.data));
    }, []);
    return (
        <div className='max-w-[1600px] mx-auto px-12 my-16'>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-3 '>


                {
                    products.map(data => <InverterCard data={data}></InverterCard>)
                }
            </div>
        </div>
    );
}

export default AllProducts;
