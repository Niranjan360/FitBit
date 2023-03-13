import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";

const Navbar = ({user , removeUser}) => {
    let navigate = useNavigate();
    const [menu, setmenu] = useState(false);

    let handleLogout = ()=>{
        removeUser();
        navigate("/login");
    }

    return ( 
        <nav>
            <Link to="/">
            <div id="logo">
                <span>FitBit</span>
                <i className='bx bx-dumbbell'></i>
            </div>
            </Link>

            <div className="nav-links">
                <Link>Trainers</Link>
                <Link to="/workouts">Workouts</Link>
                <Link to="/myworks">My Workouts</Link>
                <Link to="/fitcheck">Fitness calculator</Link>
                <Link to="/profile">Profile</Link>

            </div>
            <button onClick={handleLogout}>Logout</button>

            <div className="dropdown_menu">
                <div className="hamberger" onClick={()=>{setmenu(!menu)}} >
                {!menu ? <i class='bx bx-menu'></i> : 
                        <i class='bx bx-menu-alt-right' ></i>}
                </div>
                {menu && <div className="menu_links">
                    <Link>Trainers</Link>
                    <Link to="/workouts">Workouts</Link>
                    <Link to="/myworks">My Workouts</Link>
                    <Link to="/fitcheck">Fitness calculator</Link>
                    <Link to="/profile">Profile</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>}
            </div>
        </nav>
    );
}
const mapStateToProps = (state)=>{
    return {user : state.user};
}

const mapDispatchToProps = dispatch=> ({
    removeUser : () => dispatch({type:"REMOVE_USER" , payload:null}) ,
})

export default connect(mapStateToProps ,mapDispatchToProps)(Navbar);