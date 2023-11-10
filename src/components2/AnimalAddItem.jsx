import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {  doc} from "firebase/firestore"; 
import { db } from "../firebase";
import Swal from 'sweetalert2';
import { collection, addDoc } from 'firebase/firestore';

function AnimalAddItem({farmer}) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [Breed, setBreed] = useState();
  const [sex, setSex] = useState('');
  const [medicine, setMedicine] = useState('');
  const [species, setSpecies] = useState('');
  const [type, setType] = useState('');
  const [vaccine, setVaccine] = useState('');
  const [vaccined, setVaccined]  = useState('');
 
  console.log(farmer);
  // const [img, setImg] = useState('');
  // const [img, setImg] = useState('');
  
  function close(){
      try{

        const docRef = collection(db, "farmer", farmer.userID, "Animal");
  addDoc(docRef, {
  Name: name,
  Age: +age,
  Breed: Breed,
  Sex: sex,
  Species: species,
  Type: type,
  Vaccine: vaccine,
  Vaccined: vaccined
});

      console.log(`${name} added`);
  }catch(e){
          console.log("Animal Error: "+e);
      }

 Swal.fire({
  timer: 3000,
  showConfirmButton: false,
  willOpen: ()=>{
    Swal.showLoading();
  }, 
    willClose: ()=>{
      Swal.fire({
        icon: 'success',
        title: `Successfully Added ${name}`,
        showConfirmButton: false,
        timer: 4000,
      });
    }
 });
    handleClose();
    
  }

//   async function addData(){

    // const collGather = doc(db, "farmer", docRef.id);
    // const cropDb= collection(collGather, "Crops");
    // addDoc(cropDb, {
    //   //add Data
    // })
//  }

  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  return (
    <>
     <button onClick={handleShow} className='block mx-auto h-20 w-30 m-2 bg-green-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded'>
            + Add Animal
            </button>

      <Modal
        centered
         size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-lime-500 h-max'>
          <Modal.Title>Add Animal</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-lime-200'>
            <form onSubmit={(e)=>
            { 
              e.preventDefault();
              setName('');
              setAge("");
            }} id='editModal' className=" grid grid-cols-3 gap-1">
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Age
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="age"
                    placeholder='Current Age'
                    type="text"
                    value={age}
                    onChange={(e)=> {
                      setAge(e.target.value)
                    }}
                    />
                  </div>  
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Medicine 
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Medicine provided'
                    type="text"
                    value={medicine}
                    onChange={(e)=>{
                      setMedicine(e.target.value)
                    }}  
                    />
                  </div>
            </div>
              <div className="md:flex md:items-center mb-6 ">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Breed
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Breed of the animal'
                    type="text"
                    value={Breed}
                    onChange={(e)=>{
                      setBreed(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center  mb-6 ">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Sex
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Sex'
                    type="text"
                    value={sex}
                    onChange={(e)=>{
                      setSex(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center  mb-6 ">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Type
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Animal Type'
                    type="text"
                    value={type}
                    onChange={(e)=>{
                      setType(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center mb-6 ">
                  <div className="md:w-1/4">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Species
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Animal specie'
                    type="text"
                    value={species}
                    onChange={(e)=>{
                      setSpecies(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center mb-6 ">
                  <div className="md:w-1/4">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Vaccine
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Vaccine added'
                    type="text"
                    value={vaccine}
                    onChange={(e)=>{
                      setVaccine(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center mb-6 ">
                  <div className="md:w-1/4">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Vaccine Date
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Vaccine day'
                    type="text"
                    value={vaccined}
                    onChange={(e)=>{
                      setVaccined(e.target.value)
                    }}  
                    />
                  </div>
               </div>
        </form>
        </Modal.Body>
        <Modal.Footer className="bg-lime-500">
          <button 
          className='bg-slate-500 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded' 
          onClick={handleClose}>
            Close
          </button>
          <button 
          className='bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded'
          form="editModal"
          onClick={close}
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AnimalAddItem;