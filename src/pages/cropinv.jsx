
import carrots from "../assets/pictures/carrots.jpg";
import cropsImg from "../assets/pictures/crops3.jpeg";
import potatoes from "../assets/pictures/potatoes.jpg";
import maize from "../assets/pictures/maize.jpg";
import AddItem from "../components2/CropAddItem";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";
import CropCard from "../components2/cropCard";
import Swal from "sweetalert2";

export default  function CropInv({auth, farmer}) {
    const [crops, setCrops] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{

      Swal.fire({
        timer: 3000,
        showConfirmButton: false,
        willOpen: ()=>{
          Swal.showLoading();
        }, 
          willClose: ()=>{
            Swal.fire({
              icon: 'success',
              title: 'Successfully Added Crop',
              showConfirmButton: false,
              timer: 100,
            });
          }
       });
    }, [auth, farmer]);
     
  

    useEffect(() => {
        // Fetch crops data asynchronously
        //Implementing the setInterval method 
        const interval = setInterval(() => { 
        const fetchData = async () => {
          if (auth && farmer) {
            try {
              const querySnapshot = await getDocs(collection(db, "farmer", farmer.userID, "Crops"));
              const cropsData = [];
    
              querySnapshot.forEach((doc) => {
                const cropData = doc.data();
                cropsData.push(cropData);
              });
    
              setCrops(cropsData);
            } catch (error) {
              console.error("Error fetching crops data: ", error);
            }
          }
        };
    
        fetchData();}, 2000);
        //Clearing the interval 
      return () => clearInterval(interval); 
      }, [auth, farmer]);
   
    
    return (
        auth ? (

            <div className="bg-lime-300 h-full">
                <div className="h-10"></div>
                <div className="h-40 bg-green-400 flex justify-center items-center">
                    <div>
                        <h1 className="dark:text-indigo-200">CROP INVENTORY</h1>
                    </div>
                </div>
                <div className="h-30">
                    <AddItem farmer={farmer} />
                </div>
                <div className="grid grid-cols-4 gap-x-8 gap-y-4 space-x-30 place-content-center 1qa">
                     {crops.map((crop, index) => (
            <CropCard key={index} img={cropsImg} crop={crop}/>
          ))}
                  
                   
                </div>
            </div>
        ) : (
            <>
            {navigate('/')}
            </>
        )
    );
}


{/* <Card img={cabbage} name={"Cabbage"} />
<Card img={maize} name={"Maize"} />
<Card img={potatoes} name={"Potatoes"} />
<Card img={potatoes} name={"Potatoes"} />
<Card img={potatoes} name={"Potatoes"} />
<Card img={potatoes} name={"Potatoes"} />
<Card img={potatoes} name={"Potatoes"} />
<Card img={potatoes} name={"Potatoes"} /> */}
