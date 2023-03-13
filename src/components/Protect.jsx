import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';


const Protect = ( props) => {
    return (<div>
        {props.user ? (props.children) : (<Navigate to="/login" replace/>)  }
    </div> );
}
const mapStateToProps = (state)=>{
    return {user : state.user};
}

export default connect(mapStateToProps)(Protect);