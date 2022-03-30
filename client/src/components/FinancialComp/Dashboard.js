import React, {useEffect, useState} from 'react'
import {Link as LinkRouter} from 'react-router-dom';
import TransactionsTable from './TransactionsTable';

// import {fetchTransactions } from '../../actions';
// import { useDispatch } from 'react-redux';
import {useSelector } from 'react-redux';
import BudgetsTable from './BudgetsTable';
import TimePlot from './TimePlot';
import {IoMdArrowDropleft,IoMdArrowDropright, IoIosAdd } from 'react-icons/io'

const Dashboard = () => {
  const [dashboardDate, setDashboardDate] = useState(new Date())

  const [view, setView] = useState('transaction')
  const transactions = useSelector((state)=>state.transactions)


  const current_month = dashboardDate.toLocaleDateString('default', {month: 'long'})
  const display_month = current_month.charAt(0).toUpperCase() + current_month.slice(1) +', '+dashboardDate.getFullYear()

  
  const handleMonth =(button)=>{

    switch(button.target.id){
      case "previousMonth":
        setDashboardDate(new Date(dashboardDate.setMonth(dashboardDate.getMonth()-1)))
        
        
        break
      case "nextMonth":
        setDashboardDate(new Date(dashboardDate.setMonth(dashboardDate.getMonth()+1)))
        
        
    }
  }
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
          <BudgetsTable selectedDate ={dashboardDate} />
        )
      default:
        return(
          <TransactionsTable selectedDate ={dashboardDate}/>
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
          <button className='previous_button' type='button' id = "previousMonth" onClick={handleMonth}>
            &#8249;
          </button>
          
          
          {display_month}
          <button className='next_button'type='button' id = "nextMonth" onClick={handleMonth}>
            &#8250;
          </button>
          
        </h3>
        <h3 className='balance'>
          Your balance: 
        </h3>

        <h4 className='balance-number'>
          {"$" +sumWithInitial}
        </h4>
        
      </section>

      <section className='dashboard-plot'>
        <TimePlot selectedDate ={dashboardDate}/>
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
          <IoIosAdd/>
      </LinkRouter>
    </div>
  )
}

export default Dashboard