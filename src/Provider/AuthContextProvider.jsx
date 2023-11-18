
import React, { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isInstructor, setIsInstructor] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [token, setToken] = useState(false);
  const [userData, setUserData] = useState(false);
  const [adminStateLoading, setAdminStateLoading] = useState(true)
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const [dark, setDark] = useState(false);
  const [userMongoData, setUserMongoData] = useState(null);
  const [cartToggle, setCartToggle] = useState(true);
  const [cart, setCart] = useState([]);
  const [refetchUser, setRefetchUser] = useState(true);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);

    const localTheme = "light";
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);






  useEffect(() => {
    // axios.get(`users/${user?.email}`).then(
    //   res => {
    //     setUserMongoData(res.data)
    //     if (res.data?.role == "admin") {
    //       setIsAdmin(true)
    //       setIsStudent(false)
    //       setAdminStateLoading(false)
    //     }

    //   }
    // )


  }, [user, refetchUser]);


  useEffect(() => {
    console.log('.............................useMongo data should be here.....................................');
    console.log('...................asfsdfadgagadf.................................>>>>>>>>>>>>>>>>>>>>', userMongoData);
  }, [user, refetchUser]);

  ////////////////////////////////////////////////////////cart/////////////////////////////////////////////////

  useEffect(() => {
    if (userMongoData?.role == 'customer') {
      axios.get(`cart/${userMongoData.email}`).then(res => {
        setCart(res.data)
      }
      )

      console.log(userMongoData.email);
    }
  }, [userMongoData, cartToggle]);



  //////////////////////// Calling all products ////////////////////////////


  ////////////////// TODO : call all the products by filtering in the backend for more optimization /////////////////  
  const [allProducts, setAllProducts] = useState([]);
  const [refetch, setRefetch] = useState(false);

  const fetchData = async () => {
    const maxRetries = 30; // Maximum number of retries
  
    for (let i = 0; i <= maxRetries; i++) {
      try {
        const res = await axios.get('/products');
        console.log('from AuthContext for refetch...', res.data, i);
  
        if (res.data.length > 0) {
          setAllProducts(res.data);
          break; // Exit the loop when data is found
        }
      } catch (error) {
        console.error('Error fetching data:', error);
  
        if (i < maxRetries) {
          // Retry fetching data
          console.log(`Retrying... (Attempt ${i + 1}/${maxRetries})`);
          continue;
        } else {
          // Handle maximum retries reached
          console.error('Maximum retries reached. Unable to fetch data.');
          break;
        }
      }
    }
  };



  useEffect(() => {
    fetchData();

  }, [refetch]);


  /////////////////////////////////////////////



  const handleToggle = (event) => {
    if (event.target.checked) {
      setTheme("light");
      setDark(false)
    } else {
      setTheme("light");
      setDark(false);
    }
  }

  useEffect(() => {
    if (theme == "dark") {
      setDark(false);
    }
    else {
      setDark(false);
      console.log('setting dark', dark);
    }
  }, [dark]);

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setUser(null)
    setUserMongoData(null)
    return signOut(auth);
  };



  const toastPush = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  useEffect(() => {
    if (localStorage.getItem('access-token')) {
      setToken(localStorage.getItem('access-token'))
      // axios.defaults.headers.common['Authorization'] = 'Bearer ' +localStorage.getItem('access-token');
    }
    const unSubscribe = onAuthStateChanged(auth, async (loggedInUser) => {


      if (loggedInUser) {


        try {

          if (loggedInUser.hasOwnProperty('email')) {
            const response = await axios.get(`users/${loggedInUser.email}`);
            console.log('axios response:', response);
            setUser(loggedInUser);
            setUserMongoData(response.data)
            setIsLogged(true);
            if (response.data?.role == "admin") {
              setIsAdmin(true)

              setAdminStateLoading(false)
            }

          }



        }
        catch (err) {
          console.log(err);
        }











        // axios.post('/jwt', { email: loggedInUser.email })
        //   .then(data => {
        //     setToken(data.data.token)
        //     localStorage.setItem('access-token', data.data.token)
        //     // axios.defaults.headers.common['Authorization'] ='Bearer ' +data.data.token;
        //     setLoading(false);
        //   })



      } else {
        localStorage.removeItem('access-token')
      }
      setLoading(false)
    });
    return () => {
      unSubscribe();

    };
  }, []);


  const authInfo = { allProducts, registerUser, cartToggle, setCartToggle, user, logOut, loginUser, isLogged, setIsLogged, toastPush, isAdmin, isStudent, isInstructor, loading, adminStateLoading, userData, setUserData, setTheme, handleToggle, dark, theme, userMongoData, cart, refetchUser, setRefetchUser, refetch, setRefetch };
  return (
    <AuthContext.Provider value={authInfo}>{!loading && children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;