import items from "../assets/pictures/Items.jpeg";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import EquipCard from "../components2/EquipCard";
import EquipAdd from "../components2/EquipAddItem";

export default  function Equipment({auth, farmer}) {
    const [item, setItem] = useState([]);
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
              const querySnapshot = await getDocs(collection(db, "farmer", farmer.userID, "Equipment"));
              const equipData = [];
    
              querySnapshot.forEach((doc) => {
                const data = doc.data();
                const documentId = doc.id;
                data.id = documentId;
                equipData.push(data);
              });
    
              setItem(equipData);
            } catch (error) {
              console.error("Error fetching inventory data: ", error);
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
                        <h1 className="dark:text-indigo-200">Inventory Management</h1>
                    </div>
                </div>
                <div className="h-30">
                    <EquipAdd farmer={farmer} />
                </div>
                <div className="grid grid-cols-4 gap-x-8 gap-y-4 space-x-30 place-content-center 1qa">
                     {item.map((item, index) => (
            <EquipCard farmer={farmer} key={index} img={items} item={item}/>
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



