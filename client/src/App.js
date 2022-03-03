import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {Home} from './components/Home';
import About from './components/About'


const App = () => {
  return (
    <Router>
      <Home/>
      <About/>
    </Router>
  )
}

export default App