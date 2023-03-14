import {useState ,  useEffect } from "react";
import Navbar from "./Navbar";
import { ClimbingBoxLoader } from "react-spinners";


const Trainers = () => {


    const [trainers, settrainers] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            async function fetchCode()
            {
                let res = await fetch("http://localhost:4000/trainers");
                let data = await res.json();
                settrainers(data);
                console.log(data);
            }
            fetchCode()
        } , 3000)
    } , [])

    return (
    <div className="trainers-cont">
        <Navbar/>

        {!trainers && <ClimbingBoxLoader className="boxloader" color="#F7DF1E" />}


        {trainers && <div className="trainers-list">
            {
                trainers.map((trainer)=>{
                    return(<div className="trainer">
                        <img src={`https://avatars.dicebear.com/v2/avataaars/%7b%7b${trainer.username}%7d%7d.svg?options%5bmood%5d%5b%5d=happy`} alt="trainer" />
                        <h3>{trainer.username}</h3>
                        <p>Age : {trainer.age}</p>
                        <p>{trainer.gender} Trainer</p>
                    </div>)
                })
            }

        </div>}


    </div> );
}
export default Trainers;