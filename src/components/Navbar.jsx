import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({user , removeUser}) => {
    let navigate = useNavigate();

    let handleLogout = ()=>{
        removeUser();
        navigate("/login");
    }


    return ( 
        <nav>
            <div id="logo">
                <span>FitBit</span>
                <i className='bx bx-dumbbell'></i>
            </div>

            <div className="nav-links">
                <Link>Trainers</Link>
                <Link>Workouts</Link>
                <Link>My favs</Link>
                <Link>About us</Link>
            </div>

            <button onClick={handleLogout}>Logout</button>
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