import Navbar from "./Navbar";
import { json, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from "react";

const TrainerDashboard = ({user}) => {

    const [workoutname, setworkoutname] = useState("");
    const [duration, setduration] = useState("");
    const [reps, setreps] = useState("");
    const [sets, setsets] = useState("");
    const [muscle, setmuscle] = useState("");
    const [kg, setkg] = useState(0);
    const [referalIMG, setreferalIMG] = useState("");
    const [referalVideo, setreferalVideo] = useState("");
    const [caloriesPerMinute, setcaloriesPerMinute] = useState("");
    const [restDuration, setrestDuration] = useState(1);


    const isAuthenticated = () => {
        console.log(user);
        if(user!==null)
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    let handleAddworkout = (e)=>{
        e.preventDefault();
        let newWork = {workoutname,duration,reps,sets,muscle,kg,referalIMG,referalVideo,caloriesPerMinute,restDuration};
        let config = {
            method : "POST" ,
            headers : {"Content-Type" : "application/json"} ,
            body : JSON.stringify(newWork)
        }
        fetch("http://localhost:4000/workouts" , config)
        .then(()=>{
            alert("new work added");
            setworkoutname("");
            setduration("");
            setreps("");
            setsets("");
            setmuscle("");
            setkg("");
            setreferalIMG("");
            setreferalVideo("");
            setcaloriesPerMinute("");
            setrestDuration("");
        })
    }
    
    return ( 
    <div>
        {isAuthenticated() ? (<>
        <Navbar/>
            <div className="form-cont">
                <h1>Create New Workout</h1>
                <form onSubmit={handleAddworkout}>
                    <input type="text" placeholder="Workout name" value={workoutname} onChange={(e)=>{setworkoutname(e.target.value)}}/>
                    <input type="number" placeholder="Duration" value={duration} onChange={(e)=>{setduration(e.target.value)}} />
                    <input type="number" placeholder="Repetations" value={reps} onChange={(e)=>{setreps(e.target.value)}} />
                    <input type="texnumbert" placeholder="Sets" value={sets} onChange={(e)=>{setsets(e.target.value)}} />
                    <input type="text" placeholder="Muscle parts" value={muscle} onChange={(e)=>{setmuscle(e.target.value)}} />
                    <input type="number" placeholder="Kg if any weights" value={kg} onChange={(e)=>{setkg(e.target.value)}} />
                    <input type="url" placeholder="Referal image link" value={referalIMG} onChange={(e)=>{setreferalIMG(e.target.value)}} />
                    <input type="url" placeholder="Referal video link" value={referalVideo} onChange={(e)=>{setreferalVideo(e.target.value)}} />
                    <input type="numbers" placeholder="Calories per minutes" value={caloriesPerMinute} onChange={(e)=>{setcaloriesPerMinute(e.target.value)}} />
                    <input type="number" placeholder="Rest duration in minutes " value={restDuration} onChange={(e)=>{setrestDuration(e.target.value)}}/>

                    <input type="submit" value="Add workout"/>
                </form>

            </div>
        </>) : (<Navigate to="/login" replace/>) }

    </div> );
}
const mapStateToProps = (state)=>{
    return {user : state.user};
}

export default connect(mapStateToProps)(TrainerDashboard);