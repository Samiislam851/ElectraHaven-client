import React, { useState, useContext } from 'react';

import LoginWithGoogle from '../../Component/LoginWithSocial/LoginWithGoogle';
import LoginWithGithub from '../../Component/LoginWithSocial/LoginWithGithub';
import LoginWithFacebook from '../../Component/LoginWithSocial/LoginWithFacebook';
import LoginWithApple from '../../Component/LoginWithSocial/LoginWithApple';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import Header from '../../Layout/Header/Header';
import { useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Provider/AuthContextProvider';
const RegisterPage = ({ setTitle }) => {
  const [imguploadingmessage, setimguploadingmessage] = useState(null);
  const [progresssending, setProgresssending] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [message, setMessage] = useState("");
  const [pass, setPass] = useState(null);
  const { registerUser, user, logOut, loginUser, isLogged, setIsLogged, loading, userData, setUserData } = useContext(AuthContext);

  const changeInputPassword = (e) => {
    setMessage("")
  }
  useEffect(() => {
    setTitle("Registration")
  }, []);

  const auth = getAuth(app);
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value
    let phone = e.target.phone.value
    let password = e.target.password.value
    let cfpassword = e.target.cfpassword.value
    let fname = e.target.fname.value;
    let lname = e.target.lname.value;

    if (password == "" || email == "" || phone=="") {
      setMessage("Password or email can't be empty")
      return;
    } else if (cfpassword != password) {
      setMessage("Password Doesn't Match")
      return;
    } else if (!/[A-Z]/.test(password)) {
      setMessage("Missing Capital letter")
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setMessage("Missing Special Character")
      return;
    }
    else if (password.length < 6) {
      setMessage("Password Must be more than 6")
      return;
    }


    setUserData({
      name: fname,
      email: email,
      photoURL: uploadedImageUrl,
    })
    axios.post("/users", {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      photoURL: uploadedImageUrl,
      role: 'customer'
    })
      .then(response => {
        console.log('from register page', response.data);
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.updateProfile({
          displayName: fname,
          photoURL: uploadedImageUrl,
        }).then((response) => {
          console.log(response)
        });
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });

  }

  const imageUploadHandler = (e) => {
    setimguploadingmessage('Please wait, The image is being Uploaded');
    setProgresssending(true);
    const file = e.target.files[0];
    const formData = new FormData;
    formData.append('image', file)

    axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload?expiration=0&key=89cd126a18f125ea9e7f8256dcb15acb',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((response) => {
      console.log(response.data);
      setUploadedImageUrl(response.data.data.display_url)
      setimguploadingmessage(null)
      setProgresssending(false)
    })
      .catch((error) => {
        setimguploadingmessage("Error")
        setProgresssending(false)
        console.log(error);
      });

  }
  return (
    <>

      <section className=" w-full   flex justify-center items-center px-4 md:px-0 mt-12">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 text-2xl font-semibold items-center">
            <Link to="/login" className="py-2 text-gray-500">Login </Link>
            <Link to="/register" className="py-2  border-b-4 border-[#59C6BC]  ">Register Now</Link>
          </div>



          <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
            <div className='flex flex-col md:flex-row gap-5'>
            <input
              type="text"
              name="fname"
              id=""
              placeholder="Enter Your First Name"
              className="p-2 rounded-lg text-black border"
            />
            <input
              type="text"
              name="lname"
              id=""
              placeholder="Enter Your Last Name"
              className="p-2 rounded-lg text-black border"
            />
            </div>
            

            {/*  */}
           
            {/*  */}
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
              className="p-2 rounded-lg text-black border" required
            />
            <input
              type="phone"
              name="phone"
              id=""
              placeholder="Enter Your Phone Number"
              className="p-2 rounded-lg text-black border" required
            />
            <input onChange={changeInputPassword}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="p-2 rounded-lg text-black border" required
            />

            <input onChange={changeInputPassword}
              type="cfpassword"
              name="cfpassword"
              id="cfpassword"
              placeholder="Confirm Password"
              className="p-2 rounded-lg text-black border" required
            />
             <div className='grid grid-cols-2'>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-gray-400">Upload Your Image</span>
                </label>
                <input type="file" onChange={imageUploadHandler} name='img' id='img' className="file-input file-input-bordered w-full max-w-xs" />
              </div>
              <div className='mt-3'>
                {
                  uploadedImageUrl && <img className='max-w-[300px] rounded-lg m-5' src={uploadedImageUrl} />
                }
              </div>
            </div>
            {imguploadingmessage && <div>
              <p className='text-red-700'>{imguploadingmessage}</p>
            </div>}
            <p className='text-red-700'>{message}</p>
            <button type="submit" className="btn btn-primary  text-white text-lg border-0 bg-[#59C6BC] hover:bg-[#3f8c84]">Register</button>
            <a href="#">Forgot Password?</a>
            <a href="#">Already have an account ? <Link to="/login" className='text-white'>Login</Link> </a>
          </form>
          <div className="grid grid-cols-2 gap-4 text-black text-[10px] md:text-sm">
            {/* <LoginWithFacebook/>
   <LoginWithApple/> */}

          </div>
        </div>
      </section>

    </>
  );
}

export default RegisterPage;




