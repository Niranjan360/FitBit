import './App.css';
import {BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>        
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
