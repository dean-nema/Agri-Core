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
function App() {
  // const [color, changeColor] = useState("#a3e635");

  const [isAuthenticated, setAuthentication] = useState(false);
  
  useEffect(()=>{
   setAuthentication(JSON.parse(localStorage.getItem('is_authenticated')));
  },[])
  return (
    <div >
      <BrowserRouter>
      <Navg setAuthentication = {setAuthentication}/>
      <Routes>
        <Route path='/' element={<HomePage auth={isAuthenticated} setAuthentication = {setAuthentication}/>}/>
        <Route path="/login" element={<SignIn setAuthentication = {setAuthentication} />}/>
        <Route path="/dashboard" element={<Dashboard auth={isAuthenticated} setAuthentication = {setAuthentication}/>}/>
        <Route path="/register" element={<Signup  />}/>
        <Route path="/crop" element={<CropInv  auth={isAuthenticated} setAuthentication = {setAuthentication}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
