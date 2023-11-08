import CropView1 from "./cropView";

export default function CropCard({img,farmer, crop}) {
    return (
    <div className="ml-4 bg-lime-400">

      <div className="card" style={{ width: "18rem" , backgroundColor: "#f97316"}}>
        <img src={img} className="card-img-top" alt="..." />

        <div className="card-body">
          <div className="bg-emerald-500 grid grid-cols-2 place-content-between">
          <h5 className="card-title">Type</h5>
          <h5 className="card-title">Name</h5>
          </div>
          <div className="grid grid-cols-2 flex justify-center items-center">
            <h5 className="text-white">{crop.Type}</h5>
           <h5 className="text-white">{crop.Name}</h5>
          </div>

          <div className="bg-emerald-500 grid grid-cols-2 place-content-between">
          <h5 className="card-title">Planted</h5>
          <h5 className="card-title">Harvested</h5>
          </div>
          <div className="grid grid-cols-2 flex justify-center items-center">
            <h5 className="text-white">{crop.Planted}</h5>
           <h5 className="text-white">{crop.Harvested}</h5>
          </div>
          <a>
          <CropView1 farmer={farmer} crop={crop}/>
          </a>
        </div>
      </div>
    </div>
    );
  }
  
//   #22c55e