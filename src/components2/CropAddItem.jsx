import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {  doc} from "firebase/firestore"; 
import { db } from "../firebase";
import { setDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

function AddItem({farmer}) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [planted, setPlanted] = useState();
  const [harvested, setHarvested] = useState();
  const [pesticide, setPesticide] = useState('');
  const [notes, setNotes] = useState('');
  const [farmID, setFarmID] = useState('');
  console.log(farmer);
  // const [img, setImg] = useState('');
  // const [img, setImg] = useState('');
  
  function close(){
      try{

        const docRef = doc(db, "farmer", farmer.userID, "Crops", name);
        setDoc(docRef, {
        Name: name,
        Type: type,
        Planted: +planted,
        Harvested: +harvested,
        Pesticide: pesticide,
        Notes: notes,
        FarmID: farmID
   }, {
    merge: true
   });
      console.log(`${name} has been added`);
  }catch(e){
          console.log(e);
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
        title: `Successfully Added ${name} `,
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
            + Add Crop
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
          <Modal.Title>Add Crop</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-lime-200'>
            <form onSubmit={(e)=>
            { 
              e.preventDefault();
              setName('');
              setType("");
            }} id='editModal' className=" grid grid-cols-3 gap-1">
                <div className="md:flex md:items-center mb-6">
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
                    id="name"
                    placeholder='Crop Type'
                    type="text"
                    value={type}
                    onChange={(e)=> {
                      setType(e.target.value)
                    }}
                    />
                  </div>  
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Name
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="name"
                    placeholder='Crop Name'
                    type="text"
                    value={name}
                    onChange={(e)=>{
                      setName(e.target.value)
                    }}  
                    />
                  </div>
                  
                </div>
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Planted
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Amount planted'
                    type="text"
                    value={planted}
                    onChange={(e)=>{
                      setPlanted(e.target.value)
                    }}  
                    />
                  </div>
            </div>
              <div className="md:flex md:items-center mb-6 ">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Harvested
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Amount harvested'
                    type="text"
                    value={harvested}
                    onChange={(e)=>{
                      setHarvested(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center  mb-6 ">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Pesticides
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Pesticides sprayed'
                    type="text"
                    value={pesticide}
                    onChange={(e)=>{
                      setPesticide(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center  mb-6 ">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      FarmID
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Farm ID'
                    type="text"
                    value={farmID}
                    onChange={(e)=>{
                      setFarmID(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center mb-6 col-span-2">
                  <div className="md:w-1/4">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Crop Notes
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Notes about the crop'
                    type="text"
                    value={notes}
                    onChange={(e)=>{
                      setNotes(e.target.value)
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

export default AddItem;