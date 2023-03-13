import { useRef, useState } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { ClimbingBoxLoader } from "react-spinners";


const Fitness = ({user , editUser}) => {
    
    let levelsOpt = useRef();
    const [age, setage] = useState(user.age);
    const [weight, setweight] = useState("");
    const [height, setheight] = useState("");
    const [activityLevel, setactivityLevel] = useState("");
    const [loading, setloading] = useState(false);
    const [showbmr, setshowbmr] = useState(false);
    const [bmr, setbmr] = useState(null);

    let handleCheck = (e)=>{
        e.preventDefault();
        setactivityLevel(levelsOpt.current.value);
        setloading(true);

        const config = {
            headers: {
                'X-RapidAPI-Key': 'da3e9d6194msh99ca5a70f09bf66p1531afjsncb0199344067',
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
        };
        
        setTimeout(()=>{
            fetch(`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${user.gender}&height=${height}&weight=${weight}&activitylevel=${activityLevel}`, config)
            .then(response => response.json())
            .then(data =>{console.log(data.data); setbmr(data.data); setloading(false); setshowbmr(true);})
            .catch(err => console.error(err));
        } , 2000);
        
    }

    let saveBMR = ()=>{
        let userdetails = {...user};
        userdetails.BMR = bmr;
        userdetails.weight = weight;
        userdetails.height = height;
        editUser(userdetails);
        console.log(userdetails);
        fetch(`http://localhost:4000/users/${user.id}`,{method:"PUT" , headers :{"Content-Type":"application/json"} , body : JSON.stringify(userdetails) })
        alert("BMR details saved")
    }

    return ( 
    <div>
        <Navbar/>

        <div className="form-cont fitness-form">
            <h2>BMR</h2>
            <form onSubmit={handleCheck}>
                <input type="number" placeholder="Enter your Age" value={age} onChange={(e)=>{setage(e.target.value)}} max="99" min="10" required/>
                <input type="number" placeholder="Enter your weight in KG" value={weight} onChange={(e)=>{setweight(e.target.value)}} max="150" min="25" required  />
                <input type="number" placeholder="Enter your Height in cm" value={height} onChange={(e)=>{setheight(e.target.value)}} max="230" min="130" required/>
                <select ref={levelsOpt} onChange={()=>{setactivityLevel(levelsOpt.current.value)}}>
                    <option>SELECT LEVEL</option>
                    <option value="level_1">Level 1</option>
                    <option value="level_2">Level 2</option>
                    <option value="level_3">Level 3</option>
                    <option value="level_4">Level 4</option>
                </select>
                <input type="Submit" value="Check BMR" />
            </form>
        </div>

        {bmr && <div className="bmr">
                    <h2>Your Basal metabolic rate is {bmr.BMR} </h2>
                    <button onClick={saveBMR}>Save my Details</button>
                </div> }
        
        <div className="loader">
            {loading && <ClimbingBoxLoader color="#F7DF1E" />}
        </div>

    </div>);
}

const mapStateToProps = (state)=>{
    return {user : state.user};
}

const mapDispatchToProps = dispatch=> ({
    editUser : (userdetail) => dispatch({type:"EDIT_USER" , payload:userdetail}) ,
})

export default connect(mapStateToProps ,mapDispatchToProps)(Fitness);