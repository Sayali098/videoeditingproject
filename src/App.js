import React from 'react'
import Dashboard from './Components/Dashboard'
import { Videoeditor } from './Components/Videoeditor'
import VideoTrimmer from './Components/videotrimmer'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css'

import { NavLink } from 'react-router-dom'

const App = () => {
  return (
 
    <div>
         
         <Router>
         <nav>
          <ul>
            <li><NavLink to="/home">Dashboard</NavLink></li>
            <li><NavLink to="/videoeditor">Videoeditor</NavLink></li>
          </ul>
         </nav>
         <Routes>
         <Route path="/home" element={<Dashboard/>} />
        <Route path="/videoeditor" element={<Videoeditor/>} />
        </Routes>
        </Router>
     
    
      
    </div>
  )
}

export default App