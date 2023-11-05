import Card from "../components2/cropCard";
import carrots from "../assets/pictures/carrots.jpg";
import cabbage from "../assets/pictures/cabbage.jpg";
import potatoes from "../assets/pictures/potatoes.jpg";
import maize from "../assets/pictures/maize.jpg";
import AnimalAddItem from "../components2/AnimalAddItem";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";
import CropCard from "../components2/cropCard";

export default  function AnimalInv({auth, farmer}) {
    const [animal, setAnimal] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        // Fetch crops data asynchronously
        //Implementing the setInterval method 
        const interval = setInterval(() => { 
        const fetchData = async () => {
          if (auth && farmer) {
            try {
              const querySnapshot = await getDocs(collection(db, "farmer", farmer.userID, "Animal"));
              const animalData = [];
    
              querySnapshot.forEach((doc) => {
                const animalData = doc.data();
                animalData.push(animalData);
              });
    
              setAnimal(animalData);
            } catch (error) {
              console.error("Error fetching animal data: ", error);
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
                        <h1 className="dark:text-indigo-200">ANIMAL MANAGEMENT</h1>
                    </div>
                </div>
                <div className="h-30">
                    <AnimalAddItem farmer={farmer} />
                </div>
                <div className="grid grid-cols-4 gap-x-8 gap-y-4 space-x-30 place-content-center 1qa">
                     {animal.map((animal, index) => (
            <CropCard key={index} img={carrots} animal={animal}/>
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



