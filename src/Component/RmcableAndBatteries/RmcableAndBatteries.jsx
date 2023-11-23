import React, { useContext, useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import axios from 'axios';
import InverterCard from '../InverterCard/InverterCard';
import { AuthContext } from '../../Provider/AuthContextProvider';

const RmcableAndBatteries = () => {
    const [loading, setLoading] = useState(true)
    const [AccountingMeterData, setAccountingMeterData] = useState();
    const component = true;
    // console.log(AccountingMeterData);

    



    const { allProducts } = useContext(AuthContext)
    useEffect(() => {
       
  
        // axios.get("/rmcable-and-batteries/all")
        // .then(response => {
        //     setAccountingMeterData(response.data.slice(0, 4))
        //     console.log(response.data);
        //     setLoading(false)
        // }).catch(err => {
        //     console.log(err)
        //     setLoading(false)
        // })
            if (allProducts.length > 0 ) {
                const inverters = allProducts?.filter(e=> e.type== 'battery' || e.type=='RMCable' || e.type=='accounting meter').slice(0, 4);
                setAccountingMeterData(inverters)
                setLoading(false)
            }
          


        



    }, [allProducts]);







    return (
        <div>



            <>


                <div className="max-w-[1600px] mx-auto px-5  md:px-16 relative  mb-40 ">


                    {loading ? <>
                        <Spinner />
                    </> : <>
                        <div className="">
                            <div className="   pb-10 pt-32 ">
                                <h2 className='md:text-5xl text-4xl text-gray-700 text-center font-semibold pb-8'>Accounting Meter, RM Cable and Batteries </h2>
                                <p className=' text-lg text-gray-400 text-center md:w-[70%] w-[95%] mx-auto pb-20'>
                                Power Up Your Efficiency with our Premium Accounting Meter, RM Cable, and Batteries Collection! Unleash the potential of your electrical systems with our accounting meter, which provides accurate readings and real-time insights into your power consumption. The RM Cable, known for its durability and reliability, ensures seamless connectivity, safeguarding your electrical infrastructure. Elevate your energy storage system with our high-performance batteries, delivering consistent power when you need it most. Whether you're a homeowner, business owner, or industrial professional, our comprehensive range of electrical solutions is designed to meet your every need. Upgrade today for enhanced efficiency, reliability, and peace of mind. Don't settle for ordinary – choose excellence in power management with our top-notch Accounting Meter, RM Cable, and Batteries. Empower your space, energize your life!</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                            {AccountingMeterData?.map((e, i) => {
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

export default RmcableAndBatteries;