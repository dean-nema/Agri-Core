import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { setDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import {deleteDoc } from "firebase/firestore";

function InventoryView({farmer, item}) {

  const [name, setName] = useState(item.Name);
  const [type, setType] = useState(item.Type);
  const [cost, setCost] = useState(item.Cost);
  const [quantity, setQuantity] = useState(item.Quantity);
  const [supplier, setSupplier] = useState(item.Supplier);
  const [condition, setCondition] = useState(item.Condition);
  const [date, setDate] = useState(item.Date);
  const [brand, setBrand] = useState(item.Brand);
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
          var itemName = item.Name;
          await deleteDoc(doc(db, "farmer", farmer.userID, "Equipment", item.id));
          Swal.fire({
            timer: 3000,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              Swal.fire({
                icon: 'success',
                title: `Successfully Deleted ${item.Name}`,
                showConfirmButton: false,
                timer: 4000,
              });
            }
          });
          handleClose();
        }catch(e){
          console.log("Failed to delete: " + item.Name + " \n because of "+ e );
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Could not Delete ${item.Name}`
          });
      
      }    
      }
    });
    
  }

  function update() {
    try {
      const docRef = doc(db, "farmer", farmer.userID, "Equipment", item.id);
      setDoc(docRef, {
        Name: name,
        Type: type,
        Cost: +cost,
        Quantity: +quantity,
        Supplier: supplier,
        Condition: condition,
        Brand: brand,
        Date: date
        
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
          <Modal.Title>{item.Name} Details</Modal.Title>
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
              placeholder={item.Type}
              type="text"
              value={type}
              onChange={(e)=> {
                setType(e.target.value)
              }}
              />
            ) :(<span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {item.Type}
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
             placeholder={item.Name}
             type="text"
             value={name}
             onChange={(e)=>{
               setName(e.target.value)
             }}  
             />
           ):
           (<span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {item.Name}
            </span>)
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Brand
            </label>
          </div>
          <div className="md:w-2/3">
           { editMode ? (
             <input 
             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
             id="name"
             placeholder={item.Brand}
             type="text"
             value={brand}
             onChange={(e)=>{
               setBrand(e.target.value)
             }}  
             />
           ):
           (<span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {item.Brand}
            </span>)
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Cost
            </label>
          </div>
          <div className="md:w-2/3">
           {  editMode ? (
             <input 
             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
             id="img"
             placeholder={item.Cost}
             type="text"
             value={cost}
             onChange={(e)=>{
               setCost(e.target.value)
             }}  
             />
           )
           :
           ( <span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {item.Cost}
            </span>)
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Quantity
            </label>
          </div>
          <div className="md:w-2/3">
            { editMode? (
              <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              id="img"
              placeholder={item.Quantity}
              type="text"
              value={quantity}
              onChange={(e)=>{
                setQuantity(e.target.value)
              }}  
              />
            )
            :
            (<span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {item.Quantity}
            </span>)
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Supplier
            </label>
          </div>
          <div className="md:w-2/3">
           { editMode ? (
             <input 
             className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
             id="img"
             placeholder={item.Supplier}
             type="text"
             value={supplier}
             onChange={(e)=>{
               setSupplier(e.target.value)
             }}  
             />
           )
           :
           (<span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {item.Supplier}
            </span>)
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Date
            </label>
          </div>
          <div className="md:w-2/3">
           {editMode ? (
              <input 
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              id="img"
              placeholder={item.Date}
              type="text"
              value={date}
              onChange={(e)=>{
                setDate(e.target.value)
              }}  
              />
           )
           :
           ( <span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {item.Date}
            </span>)
            }
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 col-span-2">
          <div className="md:w-1/4">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Condition
            </label>
          </div>
          <div className="md-w-3/4">
           {editMode ? (
               <input 
               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
               id="img"
               placeholder={item.Condition}
               type="text"
               value={condition}
               onChange={(e)=>{
                 setCondition(e.target.value)
               }}  
               />
           ) :
            (<span className="bg-lime-100 inline-block border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
              {item.Condition}
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

export default InventoryView;
