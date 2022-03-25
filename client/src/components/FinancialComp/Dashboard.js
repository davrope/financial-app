import React, {useEffect, useState} from 'react'
import {Link as LinkRouter} from 'react-router-dom';
import TransactionsTable from './TransactionsTable';

import {fetchTransactions } from '../../actions';
import { useDispatch } from 'react-redux';
import { connect, useSelector } from 'react-redux';
import BudgetsTable from './BudgetsTable';
import TimePlot from './TimePlot';

const Dashboard = () => {

  const [view, setView] = useState('transaction')
  const transactions = useSelector((state)=>state.transactions)
  

  const handleBudget=()=>{
    setView('budget')
  }
  const handleTransactions = ()=>{
    setView('transaction')
  }

  const renderTable = ()=>{
    switch(view){
      case 'budget':
        return(
          <BudgetsTable/>
        )
      default:
        return(
          <TransactionsTable/>
        )
    }
  }

  const current_amount = transactions.map(function(obj){
    return obj.amount
  })

  const initial_amount = 0;
  const sumWithInitial = current_amount.reduce(
    (previousValue, currentValue)=>previousValue+currentValue,
    initial_amount
  )
  


  




  return (
    <div className='dashboard-container'>
      <section className='dashboard-header'>
        <h3 className='current-month'>
          January, 2022
        </h3>
        <h3 className='balance'>
          Your balance: 
        </h3>

        <h4 className='balance-number'>
          {"$" +sumWithInitial}
        </h4>
        
      </section>

      <section className='dashboard-plot'>
        <TimePlot/>
      </section>

      <section className='dashboard-table'>
        {renderTable()}
      </section>

      <div className='buttons-dashboard-container'>
        <button className='button-dashboard'onClick={handleTransactions} >
          Transactions
        </button>
        <button className='button-dashboard' onClick={handleBudget}>
          Budgets
        </button>
      </div>
      <LinkRouter className='FAB-transaction' to = {"/create-" + view}>
          +
      </LinkRouter>
    </div>
  )
}

export default Dashboard