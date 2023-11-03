import Card from "../components2/card";
import carrots from "../assets/pictures/carrots.jpg";
import cabbage from "../assets/pictures/cabbage.jpg";
import potatoes from "../assets/pictures/potatoes.jpg";
import maize from "../assets/pictures/maize.jpg";
import AddItem from "../components2/addItem";
import { useNavigate } from "react-router-dom";

export default function CropInv({auth}) {
    const navigate = useNavigate();
    return (
        auth ? (

            <div className="bg-lime-300 h-full">
                <div className="h-10"></div>
                <div className="h-40 bg-green-400 flex justify-center items-center">
                    <div>
                        <h1 className="dark:text-indigo-200">CROP INVENTORY</h1>
                    </div>
                </div>
                <div className="h-30">
                    <AddItem />
                </div>
                <div className="grid grid-cols-4 gap-x-8 gap-y-4 space-x-30 place-content-center 1qa">
                    <Card img={carrots} name={"Tomatoes"} />
                    <Card img={cabbage} name={"Cabbage"} />
                    <Card img={maize} name={"Maize"} />
                    <Card img={potatoes} name={"Potatoes"} />
                    <Card img={potatoes} name={"Potatoes"} />
                    <Card img={potatoes} name={"Potatoes"} />
                    <Card img={potatoes} name={"Potatoes"} />
                    <Card img={potatoes} name={"Potatoes"} />
                    <Card img={potatoes} name={"Potatoes"} />
                </div>
            </div>
        ) : (
            <>
            {navigate('/')}
            </>
        )
    );
}
