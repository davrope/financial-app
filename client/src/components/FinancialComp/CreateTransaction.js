import React from 'react';
import style from '../../styles/create-transaction.module.css'

const CreateTransaction = () => {
  return (
    <div className={style.container}>
        New transaction
        <form>
            <label>Type: </label>
            <select id = "type-transaction">
                <option value = "expenses">Expenses</option>
                <option value = "income">Income</option>
            </select>

            <label>Type:</label>
            <select id = "category">
                <option value = "home">Home</option>
                <option value = "food">Food</option>
                <option value = "laundry">Laundry</option>
            </select>

            <label>Date</label>
            <input type = "date" id = "transaction_date"/>
            
            {/* Check how to hide the spin arrows for number input */}
            <input type = "number" id= "total_transaction" placeholder='Total'/>
        </form>
    </div>
  )
}

export default CreateTransaction