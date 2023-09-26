import React from 'react';
import { Link } from 'react-router-dom';

const NextEvent = () => {
    return (
        <div className='w-full bg-[#59C6BC] py-10 text-white px-6 md:px-12'>
            <div className='max-w-[1600px] mx-auto  py-10 flex flex-col justify-center items-center md:flex-row gap-10 '>
                <div className='flex flex-col md:flex-row justify-center items-center md:gap-10 gap-5 basis-[33%]'>
                    <h3 className='md:text-6xl text-5xl font-medium my-font  md:ps-0'>Next Event</h3>
                    <div className='flex-col justify-center items-center  my-font'>
                        <h2 className='md:text-6xl text-4xl text-center font-semibold'>03</h2>
                        <p className='text-2xl text-center font-medium'>APR 2017</p>
                    </div>

                </div>
                <div className='md:text-2xl md:px-8 text-center px-5 text-xl basis-[33%]'>Concert in the Park
                    Come and visit with us, ask questions, try out a couple instruments and enjoy some great music!</div>
                    <div className='basis-[33%]  flex'>
                        <Link className=' mx-auto bg-[#55B4AD] hover:border-white text-lg border border-[#55B4AD] hover:bg-transparent transition-all ease-in-out duration-300 px-10 py-4 rounded-3xl font-medium'  to="#">LEARN MORE</Link>
                        </div>
                
            </div>

        </div>
    );
};

export default NextEvent;