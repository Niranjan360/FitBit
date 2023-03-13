import { connect } from "react-redux";
import Navbar from "./Navbar";

const Myworkouts = ({user , editUser}) => {

    console.log(user);

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
        .then(()=>{alert("workout remove from your list")})   
    }

    return (<div className="myworkouts">
        <Navbar/>

        {user.myWorkouts.length===0 && <h1>No workouts added in your List</h1>}

        {user.myWorkouts && <div className="workouts">
                        {
                            user.myWorkouts.map((workout)=>{return(
                                <div className="workout" key={workout.id}>
                                    <img src={workout.referalIMG} alt="refrl" />
                                    <h2>{workout.workoutname}</h2>
                                    <p>reps - {workout.reps}</p>
                                    <p>Calories - {workout.caloriesPerMinute}</p>
                                    <button onClick={()=>{handleRemoveWorkouts(workout)}}>remove from my workout</button>
                                </div>
                            )})
                        }
                    </div>}
        </div>);
}
const mapStateToProps = (state)=>{
    return {user : state.user};
}

const mapDispatchToProps = dispatch=> ({
    editUser : (userdetail) => dispatch({type:"EDIT_USER" , payload:userdetail}) ,
})

export default connect(mapStateToProps ,mapDispatchToProps)(Myworkouts);