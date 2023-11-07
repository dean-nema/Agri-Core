import { useState } from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import { doc, setDoc} from "firebase/firestore"; 
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
 


export default function SignIn({setAuthentication}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customerName, setName] = useState("");
  const [customerSurname, setSurname] = useState("");
  const [customerAddress, setAddress] = useState("");
  const [customerType, setFarmerType] = useState("");
  const [customerRegion, setRegion] = useState("");
  const [customerPhone, setPhone] = useState("");
  
  
  const navigate = useNavigate();
 
  
 

  function addData2(){
      const auth = getAuth();
    // Listen to the auth state changes
    try{
      onAuthStateChanged(auth, async (user) => {
      if (user) {
     // User is signed in.
         const userUID = user.uid;
         const userData = {
           name: customerName,
           surname: customerSurname,
           Phone: customerPhone,
           Type: customerType,
           Address: customerAddress
         }
         await setDoc(doc(db,"farmer", userUID), userData, {merge: true})
         .then(()=>{
           console.log("User and data initialised");
         }).catch((error)=>{
           console.error("Error adding data to firestore: ", error )
         });
       }
     });
     Swal.fire({
      timer: 1400,
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
            title: 'Successfully Registered!!',
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
            text: 'Incorrect email',
            showConfirmButton: true,
          });
        },
      });
     }
    }
  


  // async function addDetails(){
 
  //   // try{
  //   //   const farmerDocRef = doc(db, "farmer", userUID);
  //   //   console.log("this works")
  //   // }catch(e){
  //   //   console.log("Something wrong");
  //   // }
    
   
  // }

     ///adding inside a collection of a collection
    // const collGather = doc(db, "farmer", uid);
    //  const cropDb= collection(collGather, "Crops");
    //  addDoc(cropDb, {
    // ///
    //    })
    
  


  const signUP = async ()=>{
    try{

      await createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential)=>{
        addData2();
         // console.log(userCredential)
       }).catch((error)=>{
         console.log(error);
         Swal.fire({
          timer: 100,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'Incorrect Details',
              showConfirmButton: true,
            });
          },
        });
       });
       
      // Add data to Firestore
    
    }catch(e){
     console.log(e)
    
  }
}






    return (
        <>
      <div className=" bg-lime-400 flex  min-h-full flex-1 flex-col h-screen justify-center px-6 py-12 lg:px-8">
       
        <div className="bg-lime-500 ">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create An Account
          </h2>
        </div>

        <div className=" mt-5 lg:mx-auto lg:w-full lg:max-w-lg">
          <form className="gap-5 grid grid-cols-2" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                value={customerName}
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Surname
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setSurname(e.target.value)}
                value={customerSurname}
                  id="surname"
                  name="surname"
                  placeholder="Surname"
                  type="surname"
                  autoComplete="surname"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setAddress(e.target.value)}
                value={customerAddress}
                  id="address"
                  name="address"
                  placeholder="Enter Your Address"
                  type="address"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                value={customerPhone}
                  id="phone"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  type="phone"
                  autoComplete="phone"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Region
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setRegion(e.target.value)}
                value={customerRegion}
                  id="region"
                  name="region"
                  placeholder="Region"
                  type="region"
                  autoComplete="region"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Farmer Type
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setFarmerType(e.target.value)}
                value={customerType}
                  id="FarmerType"
                  name="FarmerType"
                  placeholder="Your Farming Type"
                  type="FarmerType"
                  autoComplete="FarmerType"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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

            <div className="col-span-2">
              <button
                onClick={signUP}
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Agri-Core{' '}
            {/* <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a> */}
          </p>
        </div>
        </div>
      </div>
    </>
    );
}




