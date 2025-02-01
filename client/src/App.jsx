
import './App.css'

import {BrowserRouter as Router ,Routes, Route, Navigate} from "react-router-dom";
import Landing from './components/Landing';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />

      </Routes>
    </Router>
    
    </>
  )
}

export default App
