import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import axios from 'axios';
import OrderCard from '../../Component/OrderCard/OrderCard';
import Spinner from '../../Component/Spinner/Spinner';


const Orders = () => {
    const { userMongoData } = useContext(AuthContext)
    const [orderData, setOrderData] = useState({});
const [loading, setloading] = useState(true);
    useEffect(() => {
 if(loading){

    if (userMongoData?._id) {
        axios.get(`/orders/${userMongoData?._id}`).then(

            res => {
                setOrderData(res.data)
                setloading(false)
            }


        )
    }
 }

      

    }, [userMongoData]);







    return (
        <div className='my-20 relative max-w-[1600px] min-h-[50vh] md:px-40 mx-auto'>
{!loading?<>
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
                <h1 className='top-[50%] absolute right-[50%] translate-x-[50%] translate-y-[-50%] text-3xl text-gray-500 '>Your Order list Is Empty :(</h1>


            }
</>:<>
<Spinner/>
</>}
           




        </div>
    );
}

export default Orders;
