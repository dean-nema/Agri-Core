import { useState } from "react";
import {  signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignIn({setAuthentication}){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  
  const signIN = async (e)=>{
    e.preventDefault();
   
   try{
     await signInWithEmailAndPassword(auth, email, password)
     console.log("Finished signing")
     Swal.fire({
      timer: 1300,
      showConfirmButton: false,
      willOpen: ()=>{
        Swal.showLoading();
      }, 
        willClose: ()=>{
          localStorage.setItem('is_authenticated', true);
          setAuthentication(true);
          navigate('/dashboard');
          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in',
            showConfirmButton: false,
            timer: 4000,
          });
        }
     });
   
   }catch(e){
    Swal.fire({
      timer: 1500,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Incorrect email or password.',
          showConfirmButton: true,
        });
      },
    });
   }
      
  }
    return (
        <>
     
      <div className=" bg-lime-400 flex  min-h-full flex-1 flex-col h-screen justify-center px-6 py-12 lg:px-8">
       
        <div className="bg-lime-500 ">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                value={email}
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={signIN}
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              SignUP
            </a>
          </p>
        </div>
        </div>
      </div>
    </>
    );
}