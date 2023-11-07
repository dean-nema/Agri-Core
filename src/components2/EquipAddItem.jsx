import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { db } from "../firebase";
import Swal from 'sweetalert2';

 import { collection, addDoc } from 'firebase/firestore';

function EquipAdd({farmer}) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [cost, setCost] = useState();
  const [quantity, setQuantity] = useState();
  const [supplier, setSupplier] = useState('');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [date, setDate] = useState('');
  // console.log(farmer);

  // const [img, setImg] = useState('');
  // const [img, setImg] = useState('');
  
  function close(){
      try{

        const docRef = collection(db, "farmer", farmer.userID, "Equipment");
        addDoc(docRef, {
          Name: name,
          Type: type,
          Cost: +cost,
          Quantity: +quantity,
          Supplier: supplier,
          Brand: brand,
          Condition: condition,
          Date: date
        });
      console.log(`Item ${name} added`);
  }catch(e){
          console.log(+e);
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
        title: `Successfully Added  ${name}`,
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
            + Add Item
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
          <Modal.Title>Add EQUIPMENT</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-lime-200'>
            <form onSubmit={(e)=>
            { 
              e.preventDefault();
              setName('');
              setType("");
              setBrand("");
              setCondition("");
              setCost("");
              setDate("");
              setQuantity("")
              setSupplier("");
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
                    placeholder='Item Type'
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
                    placeholder='Item Name'
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
                      Cost
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Cost of item'
                    type="text"
                    value={cost}
                    onChange={(e)=>{
                      setCost(e.target.value)
                    }}  
                    />
                  </div>
            </div>
              <div className="md:flex md:items-center mb-6 ">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Quantity
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Quantity of item'
                    type="text"
                    value={quantity}
                    onChange={(e)=>{
                      setQuantity(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center  mb-6 ">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Supplier
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Supplier of item'
                    type="text"
                    value={supplier}
                    onChange={(e)=>{
                      setSupplier(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center  mb-6 ">
                  <div className="md:w-1/3">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Condition
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Condition of item'
                    type="text"
                    value={condition}
                    onChange={(e)=>{
                      setCondition(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center mb-6 ">
                  <div className="md:w-1/4">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Brand
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Item Brand'
                    type="text"
                    value={brand}
                    onChange={(e)=>{
                      setBrand(e.target.value)
                    }}  
                    />
                  </div>
               </div>
               <div className="md:flex md:items-center mb-6 ">
                  <div className="md:w-1/4">
                    <label 
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                    >
                      Date
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input 
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                    id="img"
                    placeholder='Date bought'
                    type="text"
                    value={date}
                    onChange={(e)=>{
                      setDate(e.target.value)
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

export default EquipAdd;