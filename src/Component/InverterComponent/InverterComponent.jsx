import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import InverterCard from '../InverterCard/InverterCard';
import { AuthContext } from '../../Provider/AuthContextProvider';

const InverterComponent = () => {
    const [loading, setLoading] = useState(true)
    const [inverterData, setInverterData] = useState();
    const component = true;
    // console.log(inverterData);
    const { allProducts, refetch, setRefetch } = useContext(AuthContext)
    // console.log('refetch=========================', refetch)
    useEffect(() => {
        // console.log('all products ==============================================', allProducts, refetch);

        // axios.get("/inverters/all")
        //     .then(response => {
        //         setInverterData(response.data.slice(0,4))
        //         // console.log(response.data);
        //         setLoading(false)
        //     }).catch(err => console.log(err))
        if (allProducts.length > 0) {
            const inverters = allProducts.filter(product => product.type == 'inverter').slice(0, 4);
            setInverterData(inverters)

            setLoading(false)
        }
    }, [allProducts]);
    return (
        <div>



            <>


                <div className="max-w-[1600px] mx-auto px-5  md:px-16 relative   ">


                    {loading ? <>
                        <Spinner />
                    </> : <>
                        <div className="">
                            <div className="   pb-10 pt-32 ">
                                <h2 className='md:text-5xl text-4xl text-gray-700 text-center font-semibold pb-8'>Our Most Popular Inverters </h2>
                                <p className=' text-lg text-gray-400 text-center md:w-[70%] w-[95%] mx-auto pb-20'>Discover our most popular inverters, trusted for their reliability and performance. Explore a range of cutting-edge inverters that provide efficient power conversion, making them the preferred choice for energy-conscious consumers.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-2
                    '>
                            {inverterData.map((e, i) => {
                                if (i < 6) return <InverterCard data={e} key={i} component={component} />
                            }
                            )}
                        </div>

                    </>}


                </div>

            </>

        </div>
    );
};

export default InverterComponent;