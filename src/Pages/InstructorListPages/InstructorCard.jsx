import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { AiOutlineArrowRight } from 'react-icons/ai';
// import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const InstructorCard = ({ data, disablebtn }) => {

  const { dark } = useContext(AuthContext);
  return (
    <div className={` w-[80%] image-container transition-all ease-in-out duration-300 mx-auto bg-transparent ${dark ? ' rounded' : ''}`}>
      <div className="relative h-72 w-full overflow-hidden transition-all ease-in-out duration-300">
        <img src={data.photoURL} alt="" className="h-full  w-full object-cover object-center transition-all ease-in-out duration-300" />
        <div className='links flex justify-center gap-5  px-20 py-1 bg-opacity-40 absolute -bottom-10 left-1/2 transform -translate-x-1/2 transition-all ease-in-out duration-300'>
          <AiFillFacebook className='hover:text-[#58e2c0] text-3xl text-white hover:cursor-pointer' />
          <AiFillInstagram className='hover:text-[#58e2c0] text-3xl text-white hover:cursor-pointer' />
          <AiFillTwitterCircle className='hover:text-[#58e2c0] text-3xl text-white hover:cursor-pointer' />
          <AiFillLinkedin className='hover:text-[#58e2c0] text-3xl text-white hover:cursor-pointer' />
        </div>


      </div>

      <p className={`text-xl  md:text-2xl font-semibold pt-3 text-gray-800 text-center font-semibold capitalize`}> {data.name} </p>
      <p className="mt-1  text-cyan-500 text-center"><span></span> {data.email}</p>






      {/* <div className={data.availableseat == 0 && `bg-red-500`}>
        <div className="relative">
          <div className="relative h-72 w-full overflow-hidden ">
            <img src={data.photoURL} alt="" className="h-full w-full object-cover object-center" />
          </div>
          <div className="relative mt-2 p-3">
            <p className={`text-xl text-gray-800 font-semibold capitalize`}> {data.name} </p>
            <p className="mt-1  text-gray-500"><span>Email :</span> {data.email}</p>
            <div className='flex justify-between items-center mt-4 mb-3'>
              <p className="mt-1  font-semibold capitalize pb-3 text-gray-500">{data.role}</p>
              <button className='bg-amber-600 shadow-sm  float-right py-1 px-2 rounded   text-white' >See Classes < AiOutlineArrowRight className='inline pb-1 text-xl' /> </button>
            </div>

          </div>

        </div>

      </div> */}
    </div>
  );
}

export default InstructorCard;
