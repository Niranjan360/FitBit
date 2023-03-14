import React from 'react'
import { connect } from 'react-redux';
import Dashboard from './Dashboard';

function Home() {
    return (
        <div>
                <Dashboard/>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {user : state.user};
}

export default connect(mapStateToProps)(Home);
