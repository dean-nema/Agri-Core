import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { setDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import {deleteDoc } from "firebase/firestore";

function CropView1({farmer, crop}) {

  const [name, setName] = useState(crop.Name);
  const [type, setType] = useState(crop.Type);
  const [planted, setPlanted] = useState(crop.Planted);
  const [harvested, setHarvested] = useState(crop.Harvested);
  const [pesticide, setPesticide] = useState(crop.Pesticide);
  const [notes, setNotes] = useState(crop.Notes);
  const [farmID, setFarmID] = useState(crop.FarmID);
  const [editMode, setEdit] = useState(false)
 
  function showEdit(){
    setEdit(true)
  }
  async function deleteDocument(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try{
          var itemName = crop.id;
          await deleteDoc(doc(db, "farmer", farmer.userID, "Crops", crop.id));
          Swal.fire({
            timer: 3000,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              Swal.fire({
                icon: 'success',
                title: `Successfully Deleted `,
                showConfirmButton: false,
                timer: 4000,
              });
            }
          });
          handleClose();
        }catch(e){
          console.log("Failed to delete: " + itemName + " \n because of "+ e );
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Could not Delete ${itemName}`
          });
      
      }    
      }
    });
    
  }

  function update() {
    try {
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
      Swal.fire({
        timer: 3000,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'success',
            title: `Successfully Updated ${name} `,
            showConfirmButton: false,
            timer: 4000,
          });
        }
      });
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill up all fields!"
      });
    }
    handleClose();
  }

  const [show, setShow] = useState(false);

  const handleClose = ()=>{
    setEdit(false)
    setShow(false)
  };
  const handleShow = () => setShow(true);
   
  return (
    <>
      <button onClick={handleShow} className='btn btn-secondary'>
        View
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
          <Modal.Title>{crop.Name} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-lime-200'>
          <form onSubmit={(e) => {
            e.preventDefault();
            setName('');
            setType('');
          }} id='editModal' className="grid grid-cols-3 gap-1">
            <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Type
            </label>
          </div>
          <div className="md:w-2/3">
            {editMode ? (
              <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              id="name"
              placeholder={crop.Type}
              type="text"
              value={type}
              onChange={(e)=> {
                setType(e.target.value)
              }}
              />
            ) :(<span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {crop.Type}
            </span>) 
           }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label>
          </div>
          <div className="md:w-2/3">
           { editMode ? (
             <input 
             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
             id="name"
             placeholder={crop.Name}
             type="text"
             value={name}
             onChange={(e)=>{
               setName(e.target.value)
             }}  
             />
           ):
           (<span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {crop.Name}
            </span>)
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Planted
            </label>
          </div>
          <div className="md:w-2/3">
           {  editMode ? (
             <input 
             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
             id="img"
             placeholder={crop.Planted}
             type="text"
             value={planted}
             onChange={(e)=>{
               setPlanted(e.target.value)
             }}  
             />
           )
           :
           ( <span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {crop.Planted}
            </span>)
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Harvested
            </label>
          </div>
          <div className="md:w-2/3">
            { editMode? (
              <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              id="img"
              placeholder={crop.Harvested}
              type="text"
              value={harvested}
              onChange={(e)=>{
                setHarvested(e.target.value)
              }}  
              />
            )
            :
            (<span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {crop.Harvested}
            </span>)
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Pesticides
            </label>
          </div>
          <div className="md:w-2/3">
           { editMode ? (
             <input 
             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
             id="img"
             placeholder={crop.Pesticide}
             type="text"
             value={pesticide}
             onChange={(e)=>{
               setPesticide(e.target.value)
             }}  
             />
           )
           :
           (<span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {crop.Pesticide}
            </span>)
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              FarmID
            </label>
          </div>
          <div className="md:w-2/3">
           {editMode ? (
              <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              id="img"
              placeholder={crop.FarmID}
              type="text"
              value={farmID}
              onChange={(e)=>{
                setFarmID(e.target.value)
              }}  
              />
           )
           :
           ( <span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {crop.FarmID}
            </span>)
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 col-span-2">
          <div className="md:w-1/4">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Crop Notes
            </label>
          </div>
          <div className="md-w-3/4">
           {editMode ? (
               <input 
               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
               id="img"
               placeholder={crop.Notes}
               type="text"
               value={notes}
               onChange={(e)=>{
                 setNotes(e.target.value)
               }}  
               />
           ) :
            (<span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {crop.Notes}
            </span>)
            }
          </div>
        </div>


          </form>
        </Modal.Body>
        <Modal.Footer className="bg-lime-500">
        <button
            className='btn btn-danger'
            onClick={deleteDocument}
          >
            Delete
          </button>
          <button
            className='bg-slate-500 hover-bg-slate-800 text-white font-bold py-2 px-4 rounded'
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className='bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded'
            form="editModal"
            onClick={editMode ? (update):(showEdit)}
          >
            {
            editMode?("Save"):("Edit")
            }
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CropView1;
