import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

import SignIn from './pages/signin';
import Navg from './components2/navg';
import Dashboard from './pages/dashboard';
import Signup from './pages/register';
import CropInv from './pages/cropinv';
import { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import AnimalInv from './pages/animalInv';
import Equipment from './pages/equipment';

function App() {
  // const [color, changeColor] = useState("#a3e635");

  const [isAuthenticated, setAuthentication] = useState(false);
  const [farmerobj, setFarmer] = useState("");

  useEffect(()=>{
   setAuthentication(JSON.parse(localStorage.getItem('is_authenticated')));
  },[])


  class Farmer {

       userID;
    constructor (name, surname, region, phone, type ) {
        this.name = name;
        this.surname = surname;
        this.region = region;
        this.phone = phone;
        this.type = type;
       
    }
       setID(userID){
          this.userID = userID;
       }

    toString() {
        return this.name + ', ' + this.surname + ', ' + this.region + ', ' + this.phone + ', '+ ', ' + this.crop;
    }
  }

  const farmerconverter = {
      toFirestore: (farmer) => {
          return {
              name: farmer.name,
              surname: farmer.surname,
              Region: farmer.region,
              Phone: farmer.phone,
              Type: farmer.type

              };
      },
      fromFirestore: (snapshot, options) => {
          const data = snapshot.data(options);
          return new Farmer(data.name, data.surname, data.Region, data.Phone, data.Type,);
      }
  };
 
 


  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const auth = getAuth();
          onAuthStateChanged(auth, async (user) => {
          
          const userID = user.uid;
          const ref = doc(db, "farmer", userID).withConverter(farmerconverter);
          const docSnap = await getDoc(ref);
          if (docSnap.exists()) {

            const farmer_obj = docSnap.data();
            setFarmer(farmer_obj);
            farmer_obj.setID(userID);
            console.log(farmer_obj.toString());
            // Update the component's state with the data
          } else {
            console.log("No such document!");
          }
        })
        } catch (error) {
          console.error("Error fetching data: The user is null");
        }
      };
    
      fetchData(); // Call the async function inside useEffect
    }, [isAuthenticated]);
    
console.log(farmerobj)


  return (
    <div >
      <BrowserRouter>
      <Navg farmer = {farmerobj} setAuthentication = {setAuthentication}/>
      <Routes>
        <Route path='/' element={<HomePage auth={isAuthenticated} setAuthentication = {setAuthentication}/>}/>
        <Route path="/login" element={<SignIn setAuthentication = {setAuthentication} />}/>
        <Route path="/dashboard" element={<Dashboard farmer={farmerobj} authen={isAuthenticated} setAuthentication = {setAuthentication}/>}/>
        <Route path="/register" element={<Signup   setAuthentication = {setAuthentication}/>}/>
        <Route path="/crops" element={<CropInv farmer={farmerobj} auth={isAuthenticated} setAuthentication = {setAuthentication}/>}/>
        <Route path="/animals" element={<AnimalInv farmer={farmerobj} auth={isAuthenticated} setAuthentication = {setAuthentication}/>}/>
        <Route path="/items" element={<Equipment farmer={farmerobj} auth={isAuthenticated} setAuthentication = {setAuthentication}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
