import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';

const User = ({ setTitle }) => {
    const { user, userMongoData } = useContext(AuthContext)

    console.log('user', user);
    console.log('Mongouser', userMongoData);
    useEffect(() => {
        setTitle("User")
    }, []);
    return (
        <div className='max-w-[1200px] mx-auto my-20 md:px-12 px-5'>
            <div>

                <div className='flex flex-col  md:flex-row-reverse'>

                    <div className='basis-[30%]'>
                        <img className='rounded-lg mx-auto w-full md:max-w-[600px] hover:shadow-2xl transition-all ease-in-out duration-300 hover:scale-105' src={userMongoData?.photoURL} alt="" />

                    </div>
                    <div className='basis-[70%] '>
                        <div className='p-10'>
                        <h1 className='md:text-7xl text-3xl font-medium uppercase'>{userMongoData.fname} {userMongoData.lname}</h1>
                        <div>
                        <p className='pt-5 font-medium ms-2'>Email : <span className='text-gray-500'>{userMongoData.email}</span> </p>
                        <p className='pt-5 font-medium ms-2'>Phone : <span className='text-gray-500'>{userMongoData.phone}</span> </p>
                        
                        </div>
                        <button className='bg-gray-800 px-4 py-2 text-white rounded-lg font-medium mt-6 ms-2 hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-xl'>Update Address</button>
                     

                        </div>
                
                    </div>

                </div>
            </div>
        </div>
    );
}

export default User;
