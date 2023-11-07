export default function EquipCard({img, item}) {
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
            <h5 className="text-white">{item.Type}</h5>
           <h5 className="text-white">{item.Name}</h5>
          </div>

          <div className="bg-emerald-500 grid grid-cols-2 place-content-between">
          <h5 className="card-title">Condition</h5>
          <h5 className="card-title">Quantity</h5>
          </div>
          <div className="grid grid-cols-2 flex justify-center items-center">
            <h5 className="text-white">{item.Condition}</h5>
           <h5 className="text-white">{item.Quantity}</h5>
          </div>
          
          {/* <p className="text-white fw-bold ">
            Planted: {}
          </p>
          <p className="text-white fw-bold ">
            Harvested: {}
          </p> */}
          <a href="#" className="btn btn-secondary">
            VIEW
          </a>
        </div>
      </div>
    </div>
    );
  }
  
//   #22c55e