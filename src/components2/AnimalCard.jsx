import Experiment from "./animalView";
import AnimalView from "./animalView";
import { useNavigate } from "react-router-dom";

export default function AnimalCard({img, animal, farmer}) {
  const navigate = useNavigate()
  function openView(){
   navigate('/animalView')
  }
    return (
    <div className="ml-4 bg-lime-400">

      <div className="card" style={{ width: "18rem" , backgroundColor: "#f97316"}}>
        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <div className="bg-emerald-500 grid grid-cols-2 place-content-between">
          <h5 className="card-title">Species</h5>
          <h5 className="card-title">Breed</h5>
          </div>
          <div className="grid grid-cols-2 flex justify-center items-center">
            <h5 className="text-white">{animal.Species}</h5>
           <h5 className="text-white">{animal.Breed}</h5>
          </div>

          <div className="bg-emerald-500 grid grid-cols-2 place-content-between">
          <h5 className="card-title">Vaccine</h5>
          <h5 className="card-title">Vaccined</h5>
          </div>
          <div className="grid grid-cols-2 flex justify-center items-center">
            <h5 className="text-white">{animal.Vaccine}</h5>
           <h5 className="text-white">{animal.Vaccined}</h5>
          </div>
          
          {/* <p className="text-white fw-bold ">
            Planted: {}
          </p>
          <p className="text-white fw-bold ">
            Harvested: {}
          </p> */}
          <a onClick={openView} className='btn btn-secondary'>
          View
          </a>
        </div>
      </div>
    </div>
    );
  }
  
//   #22c55e