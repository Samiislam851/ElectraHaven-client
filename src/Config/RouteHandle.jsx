import React, { createContext, useContext } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import axios from 'axios';
import LoginPage from '../Pages/LoginPage/LoginPage';
import HomePage from '../Pages/HomePage/HomePage';

import { AuthContext } from '../Provider/AuthContextProvider';
import PrivateRoute from './PrivateRoute';
import RestictedPublicRoute from './RestictedPublicRoute';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import MyClassInstructor from '../Pages/InstructorPages/MyClassInstructor/MyClassInstructor';
import AddAClass from '../Pages/InstructorPages/AddAClass/AddAClass';
import UpdateInstructorClasses from '../Pages/InstructorPages/UpdateInstructorClasses/UpdateInstructorClasses';
import ManageClasses from '../Pages/AdminPages/ManageClasses/ManageClasses';
import ManageUsers from '../Pages/AdminPages/ManageUsers/ManageUsers';
import InstructorListPages from '../Pages/InstructorListPages/InstructorListPages';
import ClassesListPage from '../Pages/ClassesListPage/ClassesListPage';
import AdminDashBoard from '../Pages/AdminPages/AdminDashBoard/AdminDashBoard';
import AdminDashBoardLayout from '../Component/AdminComponents/AdminDashBoardLayout/AdminDashBoardLayout';
import StudentDashBoardLayout from '../Component/StudentComponent/StudentDashBoardLayout/StudentDashBoardLayout';
import StudentDashBoard from '../Pages/StudentPages/StudentDashBoard/StudentDashBoard';
import MySelectedClasses from '../Pages/StudentPages/MySelectedClasses/MySelectedClasses';
import MyEnrolledClasses from '../Pages/StudentPages/MyEnrolledClasses/MyEnrolledClasses';
import PaymentClass from '../Pages/StudentPages/PaymentClass/PaymentClass';
import AdminRoute from './AdminRoute';
import InstructorRoute from './InstructorRoute';
import InstructorDashBoard from '../Component/InstructorComponents/InstructorDashBoard/InstructorDashBoard';
import DashBoard from '../Pages/DashBoard/DashBoard';
import Test from '../Test';
import InstructorPage from '../Pages/InstructorPage/InstructorPage';
import CurrentElections from '../Component/CurrentElections/CurrentElections';
import BlogPage from '../Pages/BlogPage/BlogPage';
import SingleBlogPage from '../Pages/SingleBlogPage/SingleBlogPage';
import SingleBlog from '../Component/SingleBlog/SingleBlog';


const RouteHandle = () => {
  const { registerUser, user, logOut, loginUser, isLogged, setIsLogged, loading } = useContext(AuthContext);
  const setTitle = (title) => {
    document.title = `Harmony Heights | ${title}`
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout setTitle={setTitle} />,
      children: [
        {
          path: "/",
          element: <HomePage setTitle={setTitle} />,
        },
        {
          path: "/ongoing",
          element: <CurrentElections></CurrentElections>,
        },
        {
          path: "/dashboard",
          element: <DashBoard setTitle={setTitle} />,
        },
        {
          path: "/instructorlist",
          element: <InstructorListPages setTitle={setTitle} />,
        },

        {
          path: "/classes",
          element: <ClassesListPage setTitle={setTitle} />,
        },
        {
          path: "/blogs",
          element: <BlogPage setTitle={setTitle} />,

        },

        {
          path: "/blogs/blog",
          element: <SingleBlogPage setTitle={setTitle} />,
          children: [
            {
              path: "/blogs/blog/:blogId",
              element: <SingleBlog />
            }
          ]
        },

        {
          path: "/login",
          element: <RestictedPublicRoute> <LoginPage setTitle={setTitle} /></RestictedPublicRoute>,
        },
        {
          path: "/register",
          element: <RestictedPublicRoute> <RegisterPage setTitle={setTitle} /></RestictedPublicRoute>,
        },
        {
          path: "/admin",
          element: <AdminRoute> <AdminDashBoardLayout setTitle={setTitle} /></AdminRoute>,
          children: [
            {
              path: "/admin",
              element: <AdminDashBoard setTitle={setTitle} />,
            },
            {
              path: "/admin/manageclass",
              element: <ManageClasses setTitle={setTitle} />,
            },

            {
              path: "/admin/manageusers",
              element: <ManageUsers setTitle={setTitle} />,
            },

          ]
        }
        ,
        {
          path: "/instructor",
          element: <InstructorRoute> <InstructorDashBoard setTitle={setTitle} /></InstructorRoute>,
          children: [
            {
              path: "/instructor",
              element: <InstructorPage setTitle={setTitle} />,
            },
            {
              path: "/instructor/myclass",
              element: <MyClassInstructor setTitle={setTitle} />,
            },
            {
              path: "/instructor/updateclass/:id",
              element: <UpdateInstructorClasses setTitle={setTitle} />,
            },
            {
              path: "/instructor/addclass",
              element: <AddAClass setTitle={setTitle} />,
            }


          ]
        },

        {
          path: "/student",
          element: <StudentDashBoardLayout setTitle={setTitle} />,
          children: [
            {
              path: "/student",
              element: <StudentDashBoard setTitle={setTitle} />,
            },
            {
              path: "/student/class/selected",
              element: <MySelectedClasses setTitle={setTitle} />,
            },
            {
              path: "/student/class/payment/:classid",
              element: <PaymentClass setTitle={setTitle} />,
            },

            {
              path: "/student/class/enrolled",
              element: <MyEnrolledClasses setTitle={setTitle} />,
            },

          ]
        }
      ]
    },






    , {
      path: "/test",
      element: <Test />
    }
    ,
    {
      path: "*",
      element: <ErrorPage setTitle={setTitle} />,
    }


  ]);


  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default RouteHandle;
