import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AiFillFacebook, AiFillHeart, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineArrowRight, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
import Swal from 'sweetalert2'

const InverterCard = ({ data, component }) => {
    const [disableButton, setDisableButton] = useState(false);

    const { user,cartToggle,setCartToggle } = useContext(AuthContext);

    // console.log("..............................................................................", user?.email, data);

    const addToCart = (email, productData) => {

        const cart = {
            userEmail: email,
            productId: productData._id,
            quantity : 1,
            price : productData.price
        }

   
            axios.post('cart/', cart).then(res => {
                console.log(res.data);
                if (res.data.acknowledged ) {
                   setCartToggle(!cartToggle);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${productData?.modelNumber} was added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }else{
                    setDisableButton(true);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: `${productData?.modelNumber} is already in your cart`,
                        showConfirmButton: false,
                        timer: 1500
                        
                      })

                }

            })
       
    }

    return (
        <div className={` w-[100%]  md:hover:shadow-2xl pb-5 border bg-white rounded-xl transition-all ease-in-out duration-300 mx-auto  bg-transparent `}>
            <div className="relative rounded-lg h-72 w-full overflow-hidden transition-all ease-in-out duration-300">
                <img src={data.image} alt="" className="rounded-lg w-auto h-[90%] mx-auto object-cover object-center transition-all ease-in-out duration-300" />
                {/* <img src={data.image} alt="" className="h-full rounded-lg w-full object-cover object-center transition-all ease-in-out duration-300" /> */}
                <div className=' flex justify-between px-5 items-center gap-5 details w-[100%] pb-8 pt-3 bg-white  absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 transition-all ease-in-out duration-300'>


                </div>


            </div>
            {component ? <>
                <Link to={`Inverter/blog/${data._id}`} className={`text-xl text-start start md:text-2xl font-semibold  text-gray-600  mt-3 pb-3 font-semibold capitalize md:hover:text-[#35B087] transition-all ease-in-out duration-300`}> <h2 className=' px-5'> {data.modelNumber} </h2></Link>
                <p className='px-5 py-1 text-base  text-xl text-gray-400'>Brand : {data.brand}</p>
                <div className=' flex text-start justify-between px-5 pb-2 text-lg text-gray-400 gap-1'>

                    <p>Capacity : {data.capacity}</p>

                    <div> price : {data.price}$usd</div>
                </div>



                <div className='flex justify-between items-center px-5 pb-2'>

                    <Link to={`Inverter/blog/${data._id}`} className="mt-0 mb-2  flex items-center text-[#35B087] text-center font-semibold text-lg float-left md:hover:scale-105 transition-all ease-in-out duration-300">Read More <AiOutlineArrowRight className='inline' /> </Link>
                    <button onClick={() => { addToCart(user?.email, data) }} disabled={disableButton} className={` ${disableButton?'bg-[#808080]':'bg-[#35B087]'} text-white py-1 px-3 rounded hover:shadow-lg hover:scale-105  transition-all ease-in-out`}><AiOutlineShoppingCart className='inline' /> Add to cart</button>
                </div>
            </> : <>
                <Link to={`blog/${data._id}`} className={`text-xl  md:text-2xl font-semibold  text-gray-600 text-center mt-3 pb-3 font-semibold capitalize md:hover:text-[#35B087] transition-all ease-in-out duration-300`}> <h2 className=' px-5'> {data.brand} </h2></Link>
                <p className='px-5 py-2 text-base text-gray-400'>{data.blog_description}</p>

                <Link to={`blog/${data._id}`} className="mt-0 mb-2 px-5 flex items-center text-[#35B087] text-center font-semibold text-lg float-left md:hover:scale-105 transition-all ease-in-out duration-300">Read More <AiOutlineArrowRight className='inline' /> </Link>

                <button onClick={() => { addToCart(user?.email, data) }}><AiOutlineShoppingCart /> Add to cart</button>

            </>}







        </div>
    );
};

export default InverterCard;