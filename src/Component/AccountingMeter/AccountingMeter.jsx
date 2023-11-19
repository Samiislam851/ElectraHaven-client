import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import InverterCard from '../InverterCard/InverterCard';
import { AuthContext } from '../../Provider/AuthContextProvider';

const AccountingMeter = () => {
    const [loading, setLoading] = useState(true)
    const [AccountingMeterData, setAccountingMeterData] = useState();
    const component = true;
    // console.log(AccountingMeter);

 


    const { allProducts } = useContext(AuthContext)
    useEffect(() => {
       
  
            // axios.get("/accounting-meters/all")
            // .then(response => {
            //     setAccountingMeterData(response.data.slice(0, 4))
            //     // console.log(response.data);
            //     setLoading(false)
            // }).catch(err => {
            //     // console.log(err)
            //     setLoading(false)
            // })
            if (allProducts.length > 0 ) {
                const accountingMeters = allProducts.filter(product => product.type == 'accounting meter').slice(0, 4);

                setAccountingMeterData(accountingMeters)
    
                setLoading(false)
            }
          


        



    }, [allProducts]);


    
    return (
        <div>
            <>
                <div className="max-w-[1600px] mx-auto px-5  md:px-16 relative ">
                    {loading ? <>
                        <Spinner />
                    </> : <>
                        <div className="">
                            <div className="   pb-10 pt-32 ">
                                <h2 className='md:text-5xl text-4xl text-gray-700 text-center font-semibold pb-8'>Accounting Meters </h2>
                                <p className=' text-lg text-gray-400 text-center md:w-[70%] w-[95%] mx-auto pb-20'>
                                    Discover our extensive range of accounting meters, meticulously designed to meet various standards and deliver precise measurements for your accounting needs. Our top-quality accounting meters are known for their accuracy and reliability, making them the preferred choice for businesses and individuals seeking dependable solutions for financial and energy management. From monitoring utility consumption to optimizing financial processes, our accounting meters are your trusted partner in ensuring financial transparency and efficiency.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                            {
                            AccountingMeterData?.map((e, i) => {
                                if (i < 6) return <InverterCard data={e} key={i} component={component} />
                            }
                            )
                            }
                        </div>

                    </>}


                </div>

            </>

        </div>
    );
};

export default AccountingMeter;