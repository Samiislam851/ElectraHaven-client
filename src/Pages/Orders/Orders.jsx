import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import axios from 'axios';
import OrderCard from '../../Component/OrderCard/OrderCard';
import Spinner from '../../Component/Spinner/Spinner';


const Orders = () => {
    const { userMongoData } = useContext(AuthContext)
    const [orderData, setOrderData] = useState({});

    useEffect(() => {
        if (userMongoData?._id) {
            axios.get(`/orders/${userMongoData?._id}`).then(

                res => {
                    setOrderData(res.data)
                }


            )
        }

    }, [userMongoData]);







    return (
        <div className='my-20 relative max-w-[1600px] min-h-[50vh] md:px-40 mx-auto'>

            {orderData?.orders?
                <>
                    <h1 className='text-2xl text-gray-600 text-center my-10 max-w-[1600px] mx-auto md:text-5xl'>Your Orders</h1>
                    <div className='px-20'>

                        {
                            orderData?.orders?.map(order => <OrderCard order={order}></OrderCard>)
                        }
                    </div>
                </>
                :
             <Spinner/>


            }




        </div>
    );
}

export default Orders;
