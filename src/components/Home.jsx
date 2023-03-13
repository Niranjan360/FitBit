import React from 'react'
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';

function Home({user}) {
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
    return (
        <div>
            {
                isAuthenticated() ? 
                (<Dashboard/>) : (<Navigate to="/login" replace/>)
            }
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {user : state.user};
}

export default connect(mapStateToProps)(Home);
