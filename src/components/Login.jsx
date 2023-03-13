import { useState } from "react";
import { connect } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

const Login = ({user , addUser}) => {
    const [userkind, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    let handleSubmit = (e)=>{
        e.preventDefault();
        let reqURL = userkind==="trainer" ? "http://localhost:4000/trainers" : "http://localhost:4000/users";
        fetch(reqURL)
        .then(res=>res.json())
        .then((users)=>{
            let userdetails = users.find((user)=>{return user.email===email});
            if(userdetails===undefined)
            {
                alert("no user found ! please signup");
            }
            else if(userdetails.password!==password)
            {
                alert("password missmatch ! please enter correct password");
            }
            else
            {
                console.log(userdetails);
                addUser(userdetails);
                if(userkind==="trainer")
                {
                    alert("Trainer login sucessfull !!");
                    navigate("/trainer");
                }
                else{
                    alert("User login sucessfull !!");
                    navigate("/");
                }
            }
        })
    }

    return ( 
        <div className="login-cont">
            <div className='form-cont'>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>

                    <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                    <fieldset>
                        <legend align="center">Signup as</legend>
                        <label htmlFor='user'><input type="radio" id='user' name='kind'  onClick={()=>{setUser("user")}}/> User</label>
                        <label htmlFor='trainer'><input type="radio" id="trainer"  name='kind' onClick={()=>{setUser("trainer")}}/> Trainer</label>
                    </fieldset>

                    <input type="submit" value="Login"/>
                </form>
            </div>
            <span>Don't have an account ? <Link to="/signup">Signup here </Link></span>
        </div>
        );
}
const mapStateToProps = (state)=>{
    return {user : state.user};
}

const mapDispatchToProps = dispatch=> ({
    addUser : item => dispatch({type:"ADD_USER" , payload:item}) ,

})


export default connect(mapStateToProps ,mapDispatchToProps)(Login);