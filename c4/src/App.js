import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Routes,Route } from 'react-router-dom';
import {Home} from './components/Home'
import {Dashboard} from './components/Dashboard'
function App() {
  return (
    <div className="App">
    <Home/>
    <Routes>

      <Route path='/' element ={<Login/>}></Route>

      <Route path='/dashboard' element ={<Dashboard/>}></Route>
      
    </Routes>
    </div>
  );
}

export default App;
