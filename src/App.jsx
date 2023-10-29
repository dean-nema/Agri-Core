import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Heading from './components2/navbar';
import SignIn from './pages/signin';
import Navg from './components2/navg';
import Dashboard from './pages/dashboard';
import AddCrop from './pages/add';
import Signup from './pages/register';
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
        <Route path="/register" element={<Signup/>}/>
        <Route path="/add" element={<AddCrop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
