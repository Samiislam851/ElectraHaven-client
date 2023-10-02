import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';

const OrderedProduct = () => {
    const params = useParams()
    const id = params.id
    const [product, setProduct] = useState({});
    const { userMongoData } = useContext(AuthContext);



    const { state } = useLocation();
    console.log('order id.....................', state.order.orderId);
    const order = state.order;

    //////////////////date and time////////////
    const dateTime = new Date(order.orderDate);
    const hour = dateTime.getUTCHours();
    const minute = dateTime.getUTCMinutes();
    const date = dateTime.getUTCDate();
    const year = dateTime.getUTCFullYear();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const amOrPm = hour >= 12 ? "PM" : "AM";
    const monthIndex = dateTime.getUTCMonth();
    const month = monthNames[monthIndex];
    //////////////////////////////////////////////////////

const handleCancelOrder = () => {


axios.put(`/orders/cancel/${order.orderId}/${userMongoData._id}`).then(res => {
    console.log(res.data);
})




}



    useEffect(() => {
        axios.get(`products/${state?.order?.productId}`).then(res => setProduct(res.data))
    }, []);




    return (
        <div className='mx-auto rounded border shadow-lg p-5 rounded-lg my-20 w-[70%]'>

                 <div className='bg-gray-100 border rounded-lg md:w-[60%] mx-auto'>
                    {/* TO DO : payment gateway Integration */}
<div className='text-center font-medium text-gray-600'>Your order is {order.status}</div>


                    <div className='text-center'>Payment gateway</div>
                 </div>


            <div className=' ease-in-out duration-500 rounded-xl   mx-auto flex flex-col items-center md:flex-row justify-between'>

                <div className='md:flex gap-3'>
                    <div className='max-w-[200px] md:max-w-[150px] mx-auto'>
                        <img src={product.image} alt="" />
                    </div>
                    <div className='py-3'>
                        <div className='flex flex-col-reverse md:flex-row items-center gap-2'>
                            <div className='flex flex-col items-center border md:border-none py-5 my-1 w-full rounded-lg'>
                                <h2 className='font-medium md:text-xl text-3xl'>{product.modelNumber}</h2>
                                <h2 className=' text-gray-600 text-xl md:text-base'>{product.brand}</h2>
                            </div>

                            <div className='bg-gray-200 rounded-lg px-2 text-xs py-1 h-fit w-fit font-medium text-gray-600'>{order.status}</div>

                            <div className='bg-gray-200 rounded-lg px-2 text-xs py-1 h-fit w-fit font-medium text-gray-600'>{order.paymentMethod}</div>

                        </div>


                    </div>
                </div>


                <div className='flex flex-col items-center'>

                    <h1 className='text-2xl'>Total Price :  {order.totalPrice} bdt</h1>
                    <h2 className='text-xs text-gray-400'>Quantity : {order.quantity}</h2>
                </div>

            </div>
            <div className='flex flex-col md:flex-row justify-between items-center'>

                <h2 className='text-sm text-gray-500 py-4 '> <span className='font-semibold'>Date Of Order Placement :</span> {date} {month} {year},  {hour}:{minute} {amOrPm}</h2>
                <button onClick={handleCancelOrder} className='bg-gray-800 text-xs hover:bg-red-600 transition-all ease-in-out duration-500 text-white py-1 px-2 h-fit w-fit rounded'>Cancel Order</button>
            </div>
        </div>
    );
}

export default OrderedProduct;
