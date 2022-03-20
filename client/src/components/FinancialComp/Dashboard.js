import React from 'react'
import {Link as LinkRouter} from 'react-router-dom';

const Dashboard = () => {



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
          $2,000.12
        </h4>
      </section>

      <section className='dashboard-plot'>
        This is where the general plot of the last 30 days is happening
      </section>

      <section className='dashboard-table'>
        This is the dashboard table
      </section>

      <div className='buttons-dashboard-container'>
        <button className='button-dashboard'>
          Expenses
        </button>
        <button className='button-dashboard'>
          Budgets
        </button>
      </div>
      <LinkRouter className='FAB-transaction' to = "/create-transaction">
          +
      </LinkRouter>
    </div>
  )
}

export default Dashboard