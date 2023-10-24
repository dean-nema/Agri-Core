import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Heading from './components2/navbar';
import SignIn from './pages/signin';
import {   useState } from "react";
import Navg from './components2/navg';
import Dashboard from './pages/dashboard';

function App() {
  // const [color, changeColor] = useState("#a3e635");
  return (
    <div >

      <BrowserRouter>
      <Navg>
    <Heading/>
      </Navg>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
  
      </BrowserRouter>
    </div>

  );
}

export default App;
