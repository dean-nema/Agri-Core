import { useState } from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import { collection, addDoc, doc} from "firebase/firestore"; 
import { db } from "../firebase";




export default function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customerName, setName] = useState("");
  const navigate = useNavigate();
  const [customerSurname, setSurname] = useState("");
  const [userData, setUserData] = useState();

  async function addData(){
    const docRef = await addDoc(collection(db, "farmer"), {
      name: customerName,
      surname: customerSurname,
    });
      setUserData(docRef);
      console.log("ID added"+docRef.id)
    }
    // async function addData(){
    //   const collGather = doc(db, "farmer", userData.id);
    //  const cropDb= collection(collGather, "Crops");
    //  addDoc(cropDb, {
    //   //   //add Data
    //    })
    // }
  const signUP = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential)=>{
        console.log(userCredential)
        navigate("/dashboard");
      }).catch((error)=>{
        console.log(error);
      });
     // Add data to Firestore
    try{
           addData()
    }catch(e){
          console.log(e);
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

        <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
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




