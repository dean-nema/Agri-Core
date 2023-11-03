import { useEffect,  useState } from "react";
import { useLocation } from "react-router-dom";
import Nav2 from "./nav2";
export default function Navg(props){
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDashnav, setDashnav] = useState(false)
  const location = useLocation();
  useEffect(()=>{
     console.log("location = " + location.pathname )
     switch(location.pathname){
      case "/login":
        setShowNavbar(false)
        break;
      case "/register":
        setShowNavbar(false)
        break;
      case "/dashboard":
         setDashnav(true)
          break;
      case "/crop":
            setDashnav(true)
             break;
      default: 
          setShowNavbar(true)
          break;
      }
  },[location])
 
  if(showDashnav){
        return <div><Nav2/></div>
  }else if (showNavbar){
    return <div>{props.children}</div>
  }else{
    return <div></div>
  }
 
}