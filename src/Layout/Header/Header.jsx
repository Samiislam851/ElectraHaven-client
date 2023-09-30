import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';
import ActiveLink from '../../Component/ActiveLink/ActiveLink';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BsFillCartFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from '../../Component/Cart/Cart';



const Header = () => {



  const [langBtn, setLangBtn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [imgDetails, setImgDetails] = useState(false)
  const { registerUser, logOut, loginUser, isLogged, setIsLogged, isAdmin, isInstructor, loading, user, theme, dark, handleToggle, cartToggle, setCartToggle, userMongoData, cart } = useContext(AuthContext);

  // const { registerUser, user, logOut, loginUser, isLogged, setIsLogged, ,} = useContext(AuthContext);









  const [open, setOpen] = React.useState(false);

  const [onHomepage, setOnHomepage] = useState(false);



  const location = useLocation();
  const currentPath = location.pathname;
  console.log('from header .. user : ', user);
  useEffect(() => {
    if (currentPath == '/') {
      setOnHomepage(true)
    } else {
      setOnHomepage(false);
    }

  }, []);




  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className={`relative ${dark ? 'bg-gray-900' : 'bg-white'} shadow-lg z-[1000]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center   border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <h1 className='h-8 w-auto sm:h-10 text-gray-700 text-4xl font-semibold flex gap-2 justify-center items-center  themeFont'> ElectraHaven </h1>

              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className={`hidden md:flex p-3 px-5 rounded-3xl space-x-10`}>
              <ActiveLink
                to="/"
                className="text-base font-medium text-gray-500 "
              >
                Home
              </ActiveLink>


              <ActiveLink
                to="/blogs"
                className="text-base font-medium text-gray-500 "
              >
                Blogs
              </ActiveLink>
              <ActiveLink
                to="/contact"
                className="text-base font-medium text-gray-500 "
              >
                Contact
              </ActiveLink>



              {
                userMongoData?.role == "customer" ? <>
                  <Link to='/cart'>
                    <div className='bg-gray-200 text-gray-500 hover:shadow-xl hover:bg-gray-300 hover:text-gray-700 transition-all ease-in-out duration-500 flex justify-center items-center px-3 py-1 rounded-xl '>
                      <AiOutlineShoppingCart className='text-2xl ' />
                      <div className='text-gray-600 font-semibold text-xl px-2'>{cart.length}</div>
                    </div>
                  </Link>
                </> : <></>

              }



              {user ? <ActiveLink
                to={!loading && (isAdmin ? '/admin' : (isInstructor ? '/instructor' : '/student'))}
                className="text-base font-medium text-gray-500 "
              >
                Dashboard
              </ActiveLink> : <></>}





              <label className="hidden swap swap-rotate">

                {/* this hidden checkbox controls the state */}
                <input onClick={handleToggle} checked={dark} type="checkbox" />

                {/* sun icon */}

                <svg className="swap-on fill-current w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                <svg className="swap-off fill-current w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>




                {/* moon ico */}

              </label>




            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">{!user ?
              <>
                <Link
                  to='/login'
                  className="whitespace-nowrap text-base font-medium text-gray-500 "
                >
                  Sign in
                </Link>
                <Link
                  to='/register'
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r
                  from-[#05A97F] to-[#05A97F] "
                >
                  Sign up
                </Link>
              </>
              :
              <>
                <img src={user.photoURL ? user?.photoURL : userMongoData?.photoURL} className='rounded-full h-[50px] border border-1 shadow border-gray-300' title={user?.displayName} alt="" />
                <button onClick={logOut} className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-500 bg-gray-400 bg-opacity-70 hover:bg-red-700'>Sign Out</button>
              </>}
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////// */}

        <div
          className={
            open
              ? "opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-[99999999999] text-center  md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 footer-main divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>

                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="footer-main rounded-md p-2 inline-flex items-center justify-center text-blue-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8 ">


                  <ActiveLink
                    to="/"
                    className="text-base font-medium text-gray-500 "
                  >
                    Home
                  </ActiveLink>


                  <ActiveLink
                    to="/blogs"
                    className="text-base font-medium text-gray-500 "
                  >
                    Blogs
                  </ActiveLink>
                  <ActiveLink
                    to="/contact"
                    className="text-base font-medium text-gray-500 "
                  >
                    Contact
                  </ActiveLink>


                  {
                    userMongoData?.role == "customer" ? <>
                      <Link to='/cart'>
                        <div className='bg-gray-200 text-gray-500 hover:shadow-xl hover:bg-gray-300 hover:text-gray-700 transition-all ease-in-out duration-500 flex justify-center items-center px-3 py-1 rounded-xl '>
                          <AiOutlineShoppingCart className='text-2xl ' />
                          <div className='text-gray-600 font-semibold text-xl px-2'>{cart.length}</div>
                        </div>
                      </Link>
                    </> : <></>

                  }



                  {user ? <ActiveLink
                    to={!loading && (isAdmin ? '/admin' : (isInstructor ? '/instructor' : '/student'))}
                    className="text-base font-medium text-gray-500 "
                  >
                    Dashboard
                  </ActiveLink> : <></>}



                  <label className="swap swap-rotate hidden">

                    {/* this hidden checkbox controls the state */}
                    <input onClick={handleToggle} checked={dark} type="checkbox" />

                    {/* sun icon */}

                    <svg className="swap-on fill-current w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                    <svg className="swap-off fill-current w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>




                    {/* moon ico */}

                  </label>

                  <div className=" md:flex items-center justify-end md:flex-1 lg:w-0">{!user ?
                    <>
                      <Link
                        to='/login'
                        className="whitespace-nowrap text-base font-medium text-gray-500 "
                      >
                        Sign in
                      </Link>
                      <Link
                        to='/register'
                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-500 bg-[#05A97F]"
                      >
                        Sign up
                      </Link>
                    </>
                    :
                    <>
                      <img src={user.photoURL} className='rounded-full mx-auto mb-2 h-[50px] border border-1 shadow border-gray-300' title={user?.displayName} alt="" />
                      <button onClick={logOut} className='ml-8 -ms-1 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-500 bg-gray-400 bg-opacity-70 hover:bg-red-700'>Sign Out</button>
                    </>}
                  </div>


                </nav>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
