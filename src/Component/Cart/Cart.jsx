import React, { useContext, useEffect, useState } from 'react';
import CartDataCard from '../CartDataCard/CartDataCard';
import { AuthContext } from '../../Provider/AuthContextProvider';
import axios from 'axios';

const Cart = () => {

const [toggleDependency, setToggleDependency] = useState(false);

    const { userMongoData, user, cartToggle, cart,setCartToggle } = useContext(AuthContext);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newPrice = cart.reduce((acc, current) => {
            const productPrice = current.quantity * current.price
            console.log('current : ', current);
            return acc + productPrice;
        }, 0)
        setTotalPrice(newPrice);
        console.log('the totalprice useeffect............. price: ',newPrice);
    }, [toggleDependency,cart]);


console.log(toggleDependency);




    return (
        <div className='max-w-[1600px] mx-auto md:px-12 px-5  h-full '>
            {/* <h1 className='text-3xl text-center'>{userMongoData.name}'s Cart</h1> */}
            <div className='flex flex-col gap-5 md:flex-row w-full mt-10'>

                <div className='shadow rounded-xl md:mx-10 md:basis-[70%]'>
                    <ul>
                        {cart.map(data => <CartDataCard key={data._id} setToggleDependency={setToggleDependency} toggleDependency={toggleDependency} data={data}></CartDataCard>)}
                    </ul>
                </div>


                <div className=' md:basis-[30%]'>
                    <div className='shadow py-5 rounded-xl'>

                        <div className='h-[150px] my-5 border'>
                            {/* TODO address ......................... */}
                        </div>
                        <div className='md:px-10 px-5'>
                            <h2 className='text-center flex justify-between text-xl'>Total : <span className='font-semibold'>{totalPrice}</span> </h2>

                            <button className='bg-[#35B087] font-medium cursor-pointer hover:bg-[#339675] transition-all ease-in-out duration-500 rounded-lg py-2 my-5 text-white w-full'>Confirm Order</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;