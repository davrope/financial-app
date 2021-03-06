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
import CreateTransaction from './components/FinancialComp/CreateTransaction';
import CreateBudget from './components/FinancialComp/CreateBudget';
import DeleteTransaction from './components/FinancialComp/DeleteTransaction';
import DeleteBudget from './components/FinancialComp/DeleteBudget';



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
        <Route path = '/create-transaction' element = {<CreateTransaction/>}/>
        <Route path = '/create-budget' element = {<CreateBudget/>}/>
        <Route path = '/transactions/delete/:id' element = {<DeleteTransaction/>}/>
        <Route path = '/budgets/delete/:id' element = {<DeleteBudget/>}/>
      </Routes>
      
    </Router>
  )
}

export default connect(null, actions)(App)