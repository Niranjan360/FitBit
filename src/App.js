import './App.css';
import {BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Workouts from './components/Workouts';
import Fitness from './components/Fitness';
import Profile from './components/Profile';
import TrainerDashboard from './components/TrainerDashboard';
import Myworkouts from './components/Myworkouts';
import Protect from './components/Protect';
import Trainers from './components/Trainerslist';

function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/" element={<Home/>}/>        
          <Route path="/trainer" element={<Protect children={<TrainerDashboard/>}/>}/>        
          <Route path='/workouts' element={<Protect children={<Workouts/>}/>}/>
          <Route path='/fitcheck' element={<Protect children={<Fitness/>}/>}/>
          <Route path='/profile' element={<Protect children={<Profile/>}/>}/>
          <Route path='/myworks' element={<Protect children={<Myworkouts/>}/>}/>
          <Route path='/trainers' element={<Protect children={<Trainers/>}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
