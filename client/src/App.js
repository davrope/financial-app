import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import * as actions from './actions';



import Header from './components/Header';

import Login from './components/Login';
import Landing from './components/Landing';

import { useDispatch } from 'react-redux';
import UserInfo from './components/UserInfo';
import Dashboard from './components/FinancialComp/Dashboard';



const App = () => {

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(actions.fetchUser())
  }, [])

  return (
    <Router>
      <Header/>


      <Routes>
        <Route path='/' element = {<Landing/>}/>
        <Route path = "login" element = {<Login/>}/>
        <Route path = '/user' element = {<UserInfo/>}/>
        <Route path = '/dashboard' element = {<Dashboard/>}/>
      </Routes>
      
    </Router>
  )
}

export default connect(null, actions)(App)