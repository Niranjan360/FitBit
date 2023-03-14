import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [user, setUser] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    let navigate  = useNavigate();

    let handleSubmit = (e)=>{
        e.preventDefault();
        let newuser = {username , email , password , age , gender , registerdOn : new Date().toString() , myWorkouts : [] };
        let reqURL = user==="trainer" ? "http://localhost:4000/trainers" : "http://localhost:4000/users";

        let config = { method : "POST" , headers : {"Content-Type":"application/json"} , body : JSON.stringify(newuser)};

        fetch( reqURL , config )
        .then(()=>{alert("Registered sucessfully")
        navigate("/login"); 
    })
    }

    return (
        <div className="signup-cont">
            <div className='form-cont'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)}} required/>
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                    <input type="text" placeholder='Confirm password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} required/>
                    <input type="number" placeholder='Age' value={age} onChange={(e)=>{setAge(e.target.value)}} min="18" max="99" required/>

                    <fieldset>
                        <legend align="center">Profile picture</legend>
                        <input type="file" />
                    </fieldset>
                    
                    <fieldset>
                        <legend align="center">Gender</legend>
                        <label htmlFor='male'><input type="radio" id='male' name='gender' onClick={()=>{setGender("male")}}/> Male</label>
                        <label htmlFor='female'><input type="radio" id="female" name='gender' onClick={()=>{setGender("female")}}/> Female</label>
                    </fieldset>

                    <fieldset>
                        <legend align="center">Signup as</legend>
                        <label htmlFor='user'><input type="radio" id='user' name='kind'  onClick={()=>{setUser("user")}}/> User</label>
                        <label htmlFor='trainer'><input type="radio" id="trainer"  name='kind' onClick={()=>{setUser("trainer")}}/> Trainer</label>
                    </fieldset>

                    <input type="submit" value="Signup"/>
                </form>
            </div>
            <span>Already have an account ? <Link to="/login">Signin here </Link></span>
        </div>
    )
}
