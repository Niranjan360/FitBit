import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import body from '../images/frontbody.png'

const Profile = ({user}) => {

    console.log(user);

    return ( 
    <div className="profile-cont">
        <Navbar/>
        <div className="userdetails">
            <div>
                <h1>Hello {user.username}</h1>
                {user.BMR.BMR && <div>
                                    <h3>Body Weight : {user.weight}  </h3>
                                    <h3>Height : {user.height}  </h3>
                                    <h3>BMR : {user.BMR.BMR}  </h3>
                                </div>}
            </div>
            <div>
                <img src={body}/>
            </div>
        </div>
    </div> );
}
const mapStateToProps = (state)=>{
    return {user : state.user};
}

const mapDispatchToProps = dispatch=> ({
    removeUser : () => dispatch({type:"REMOVE_USER" , payload:null}) ,
})

export default connect(mapStateToProps ,mapDispatchToProps)(Profile);