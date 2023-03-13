import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ClimbingBoxLoader } from "react-spinners";
import { connect } from "react-redux";

const Workouts = ({user , editUser}) => {

    const [workouts, setWorkouts] = useState(null);
    const [workoutsID, setWorkoutsID] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/workouts")
            .then((res)=>{return res.json()})
            .then((data)=>{setWorkouts(data)
                setWorkoutsID(user.myWorkouts.map((w)=>{return w.id}));
            })
        } , 2000)
    } , [])



    let handleWorkouts = (workout)=>{
        let userdetail = {...user}

        if(userdetail.myWorkouts === undefined)
        {
            userdetail.myWorkouts = [workout];
        }
        else
        {
            userdetail.myWorkouts.push(workout);
        }
        editUser(userdetail);
        fetch("http://localhost:4000/users/"+user.id , 
        {
            method:"PUT",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify(userdetail)
        })
        .then(()=>{alert("workout added")})   
    }

    let handleRemoveWorkouts = (workout)=>{
        let userdetail = {...user}

        let myWorkouts =  userdetail.myWorkouts.filter((myworkout)=>{ return myworkout.id!=workout.id});
        console.log(myWorkouts);
        userdetail.myWorkouts = myWorkouts;    
        editUser(userdetail);
        fetch("http://localhost:4000/users/"+user.id , 
        {
            method:"PUT",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify(userdetail)
        })
        .then(()=>{alert("workout removed from your list")})   
    }

    return ( <div>
        <Navbar/>
        <div className="workouts-cont">
        {!workouts && <ClimbingBoxLoader className="boxloader" color="#F7DF1E" />}
        {workouts && <div className="workouts">
                        {
                            workouts.map((workout)=>{  console.log(workoutsID.includes(workout.id));
                                return(
                                <div className="workout" key={workout.id}>
                                    <img src={workout.referalIMG} alt="refrl" />
                                    <h2>{workout.workoutname}</h2>
                                    <p>reps - {workout.reps}</p>
                                    <p>Calories - {workout.caloriesPerMinute}</p>
                                    {workoutsID.includes(workout.id) ? <button onClick={()=>{handleRemoveWorkouts(workout)}}>remove from my workout</button> 
                                    : <button onClick={()=>{handleWorkouts(workout)}}>Add to my workout</button>}
                                </div>
                            )})
                        }
                    </div>}
        </div>
    </div> );
}
const mapStateToProps = (state)=>{
    return {user : state.user};
}

const mapDispatchToProps = dispatch=> ({
    editUser : (userdetail) => dispatch({type:"EDIT_USER" , payload:userdetail}) ,
})

export default connect(mapStateToProps ,mapDispatchToProps)(Workouts);

