import React from 'react';
import style from '../../styles/create-transaction.module.css';
import {Link as LinkRouter} from 'react-router-dom';

const CreateTransaction = () => {
  
  const SubmitTransactionValues= (formValues)=>{
    console.log(console.log(formValues))
  }

  return (
    <div className={style.container}>
        New transaction
        <form>
            <label>Name: </label>
            <input type='text'/>
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


            <LinkRouter to = '/user'>
              Cancel
            </LinkRouter>

            <button type = "submit" onClick={()=>SubmitTransactionValues(formValues)}>
              Submit
            </button>
        </form>
    </div>
  )
}

export default CreateTransaction