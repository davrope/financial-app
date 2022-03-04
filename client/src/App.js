import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';



import {Header} from './components/Header';

import Login from './components/Login';
import Landing from './components/Landing';



const App = () => {
  return (
    <Router>
      <Header/>


      <Routes>
        <Route path='/' element = {<Landing/>}/>
        <Route path = "login" element = {<Login/>}/>
      </Routes>
      
    </Router>
  )
}

export default App