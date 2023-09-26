import React from 'react';

const MusicGroups = () => {
    return (
        <div className='max-w-[1600px] px-5 md:px-12 mx-auto py-40'>
            <h1 className='md:text-6xl text-4xl text-center font-semibold pb-5 text-gray-800'>Music Groups</h1>
            <h3 className='hidden md:block text-3xl text-center pb-16 text-[#05A97F]'>for</h3>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-3'>
                <div className='flex flex-col items-center '>
                    <div className='w-[200px] h-[200px] overflow-hidden rounded-full'>
                        <img className='object-cover w-full h-full' src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/services-3.jpg" alt="Kids" />
                    </div>
                    <h2 className='mt-4 text-center md:text-4xl text-3xl pb-3 text-gray-700'>Kids</h2>
                    <p className='text-center text-gray-500 text-lg w-[80%] mx-auto'>Our school is a solution for families who would like to expose their children to the world of music.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[200px] h-[200px] overflow-hidden rounded-full'>
                        <img className='object-cover w-full h-full' src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/services-2.jpg" alt="Teens" />
                    </div>
                    <h2 className='mt-4 text-center md:text-4xl text-3xl pb-3 text-gray-700'>Teens</h2>
                    <p className='text-center text-gray-500 text-lg w-[80%] mx-auto'>Our classes help to develop the skills necessary for music learning and a lifelong enjoyment of music.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[200px] h-[200px] overflow-hidden rounded-full'>
                        <img className='object-cover w-full h-full' src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/services-1.jpg" alt="Adults" />
                    </div>
                    <h2 className='mt-4 text-center md:text-4xl text-3xl pb-3 text-gray-700'>Adults</h2>
                    <p className='text-center text-gray-500 text-lg w-[80%] mx-auto'>We have programs for everyone. In addition to teaching music to children, we instruct adults and seniors.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[200px] h-[200px] overflow-hidden rounded-full'>
                        <img className='object-cover w-full h-full' src="https://melody.ancorathemes.com/wp-content/uploads/2016/05/image-7.jpg" alt="Private lessons" />
                    </div>
                    <h2 className='mt-4 text-center md:text-4xl text-3xl pb-3 text-gray-700'>Private lessons</h2>
                    <p className='text-center text-gray-500 text-lg w-[80%] mx-auto'>Private music lessons provide one-on-one attention, so teachers can focus on an individual student’s needs.</p>
                </div>
            </div>

        </div>
    );
};

export default MusicGroups;