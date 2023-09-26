import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link, Outlet, useParams } from 'react-router-dom';
import { AiFillFacebook, AiFillHeart, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import Spinner from '../../Component/Spinner/Spinner';

const SingleBlogPage = ({ setTitle }) => {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    const { blogId } = useParams();
    const [blogData, setblogData] = useState({});
    useEffect(() => {
        setLoading(true)
        axios.get(`blog/${blogId}`).then(res => {
            setblogData(res.data)
            setTitle(` ${blogData.title}`)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [blogId]);

    useEffect(() => {
        if (loading) {
            axios.get("/blog")
                .then(response => {
                    setBlogs(response.data)
                    setLoading(false);
                   
                }).catch(err => console.log(err))

        }



    }, []);
    console.log(blogs);
    const clickOperation = () => {


    }

    return (
        <>
            {loading ? <Spinner /> :
                <div className='max-w-[1600px] md:px-12 mx-auto px-5 pb-20 md:pb-40'>
                    <div className='py-32'>
                        <h2 className='md:text-6xl text-4xl text-center font-semibold  pb-7 text-gray-700 md:hover:text-[#4da39d] cursor-pointer w-fit mx-auto transition-all ease-in-out duration-300'>{blogData.title}</h2>
                        <p className='txt-center md:text-xl text-gray-400 md:w-[50%] mx-auto  text-center'>{blogData.blog_description}</p>
                    </div>
                    <div className='flex flex-col md:flex-row w-full'>
                        <Outlet />
                        <div className='md:basis-[35%] pt-20 md:pt-0 '>
                            <div class="flex items-center justify-center shadow  px-10 py-5">
                                <input
                                    type="text"
                                    placeholder="Search a blog..."
                                    class="w-64 py-2 px-4 rounded-l-lg border border-gray-300 focus:ring focus:ring-[##55B4AD]transition-all ease-in-out duration-300"
                                />
                                <button
                                    class="bg-[#55B4AD] border border-[#55B4AD] text-white py-2 px-4 rounded-r-lg hover:bg-[#44948f] focus:outline-none focus:ring focus:ring-blue-300 transition-all ease-in-out duration-300"
                                >
                                    Search
                                </button>
                            </div>
                            <div className='shadow mt-16 px-5 md:px-7  '>
                                <h1 className='text-2xl font-medium px-5 pt-5 pb-3 border-b border-[#55B4AD]'>Recent Posts</h1>
                                {
                                    blogs.map(blog => {
                                        if (blog._id === blogData._id) {
                                            return (
                                                <></>
                                            );
                                        } else {
                                            return (
                                                <Link onClick={clickOperation} to={`/blogs/blog/${blog._id}`} className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
                                                    {blog.title}
                                                </Link>
                                            );
                                        }
                                    })
                                }

                            </div>
                            <div className='shadow mt-16 px-5 md:px-7  '>
                                <h1 className='text-2xl font-medium px-5 pt-5 pb-3 border-b border-[#55B4AD]'>Categories</h1>

                                <Link to="#" className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
                                    Class
                                </Link>
                                <Link to="#" className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
                                    Learning
                                </Link>
                                <Link to="#" className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
                                    Study
                                </Link>
                                <Link to="#" className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
                                    Subject
                                </Link>
                                <Link to="#" className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
                                    Timing
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
    // return (
    //     <>
    //         {loading ? <Spinner /> :
    //             <div className='max-w-[1600px] md:px-12 mx-auto px-5 pb-20 md:pb-40'>
    //                 <div className='py-32'>
    //                     <h2 className='md:text-6xl text-4xl text-center font-semibold  pb-7 text-gray-700 md:hover:text-[#4da39d] cursor-pointer w-fit mx-auto transition-all ease-in-out duration-300'>{blogData.title}</h2>
    //                     <p className='txt-center md:text-xl text-gray-400 md:w-[50%] mx-auto  text-center'>{blogData.blog_description}</p>
    //                 </div>
    //                 <div className='flex flex-col md:flex-row w-full'>
    //                     <div className='md:basis-[65%] '>
    //                         <div className='w-full  justify-start items-center flex'>
    //                             <img src={blogData.image} className='image-full rounded-lg md:min-h-[500px]' alt="" />
    //                         </div>
    //                         {/* date n details */}
    //                         <div className='flex gap-5 py-2  '>

    //                             <div className='md:text-lg text-gray-500 flex items-center gap-2'>
    //                                 <FiClock className='inline font-bold text-[#55B4AD]' />
    //                                 {blogData.time}
    //                             </div>
    //                             <div className='md:text-lg text-gray-500 flex items-center gap-2'>
    //                                 <BsFillPersonFill className='inline font-bold text-[#55B4AD]' />
    //                                 {blogData.authorname}
    //                             </div>
    //                             <div className='md:text-lg text-gray-500 flex items-center gap-2'>
    //                                 <AiFillHeart className='inline font-bold text-[#55B4AD]' />
    //                                 {blogData.reactionscount} likes
    //                             </div>
    //                         </div>

    //                         <div className='md:text-4xl text-center md:text-start text-gray-700 font-semibold pt-10 pb-5'>{blogData.title}</div>
    //                         <p className='md:text-xl text-center md:text-start text-gray-500 md:pe-20'>
    //                             {blogData.blog}
    //                         </p>
    //                         <div className='border-s-[4px] my-5 border-[#55B4AD] bg-gray-100 bg-opacity-50 py-10 md:text-2xl px-5 text-gray-500'>
    //                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus dolorem provident hic quasi culpa porro autem quaerat error ducimus eveniet, velit minus mollitia labore quo impedit earum sapiente pariatur praesentium?
    //                             <div className="text-right mt-3">
    //                                 <p className="text-gray-500 text-2xl pe-10">- Conor' Mc George</p>
    //                             </div>
    //                         </div>
    //                         <div className='flex justify-between items-center pt-6'>
    //                             <button className='btn bg-[#55B4AD] hover:bg-[#4ca19c] text-lg font-medium text-white'>Share</button>
    //                             <div className='flex gap-3'>
    //                                 <AiFillFacebook className='hover:text-[#55B4AD] hover:scale-125 transition-all ease-in-out duration-300 text-3xl text-[#339c82] hover:cursor-pointer' />
    //                                 <AiFillInstagram className='hover:text-[#55B4AD] hover:scale-125 transition-all ease-in-out duration-300 text-3xl text-[#339c82] hover:cursor-pointer' />
    //                                 <AiFillTwitterCircle className='hover:text-[#55B4AD] hover:scale-125 transition-all ease-in-out duration-300 text-3xl text-[#339c82] hover:cursor-pointer' />
    //                                 <AiFillLinkedin className='hover:text-[#55B4AD] hover:scale-125 transition-all ease-in-out duration-300 text-3xl text-[#339c82] hover:cursor-pointer' />
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className='md:basis-[35%] pt-20 md:pt-0 '>
    //                         <div class="flex items-center justify-center shadow  px-10 py-5">
    //                             <input
    //                                 type="text"
    //                                 placeholder="Search a blog..."
    //                                 class="w-64 py-2 px-4 rounded-l-lg border border-gray-300 focus:ring focus:ring-[##55B4AD]transition-all ease-in-out duration-300"
    //                             />
    //                             <button
    //                                 class="bg-[#55B4AD] border border-[#55B4AD] text-white py-2 px-4 rounded-r-lg hover:bg-[#44948f] focus:outline-none focus:ring focus:ring-blue-300 transition-all ease-in-out duration-300"
    //                             >
    //                                 Search
    //                             </button>
    //                         </div>
    //                         <div className='shadow mt-16 px-5 md:px-7  '>
    //                             <h1 className='text-2xl font-medium px-5 pt-5 pb-3 border-b border-[#55B4AD]'>Recent Posts</h1>
    //                             {
    //                                 blogs.map(blog => {
    //                                     if (blog._id === blogData._id) {
    //                                         return (
    //                                             <></>
    //                                         );
    //                                     } else {
    //                                         return (
    //                                             <Link onClick={clickOperation} to={`/blogs/blog/${blog._id}`} className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
    //                                                 {blog.title}
    //                                             </Link>
    //                                         );
    //                                     }
    //                                 })
    //                             }

    //                         </div>
    //                         <div className='shadow mt-16 px-5 md:px-7  '>
    //                             <h1 className='text-2xl font-medium px-5 pt-5 pb-3 border-b border-[#55B4AD]'>Categories</h1>

    //                             <Link onClick={clickOperation} className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
    //                                 Class
    //                             </Link>
    //                             <Link onClick={clickOperation} className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
    //                                 Learning
    //                             </Link>
    //                             <Link onClick={clickOperation} className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
    //                                 Study
    //                             </Link>
    //                             <Link onClick={clickOperation} className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
    //                                 Subject
    //                             </Link>
    //                             <Link onClick={clickOperation} className='py-4 px-5 md:text-xl text-lg font-medium border-b block hover:text-[#55B4AD] hover:scale-105 transition-all ease-in-out duration-300 transition-all ease-in-out duration-300'>
    //                                 Timing
    //                             </Link>

    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>}
    //     </>
    // );
};

export default SingleBlogPage;