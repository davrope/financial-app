import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <section className='dashboard-header'>
        <h3>
          January
        </h3>

        <h3>
          2022
        </h3>

        <h3 className='balance'>
          Balance: 
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

        <button className='FAB-transaction'>
          +
        </button>
      </div>
    </div>
  )
}

export default Dashboard