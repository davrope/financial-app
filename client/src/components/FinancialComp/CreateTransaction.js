import React, { useState } from 'react';
import style from '../../styles/create-transaction.module.css';
import {Link as LinkRouter} from 'react-router-dom';
import * as actions from '../../actions';
import { useDispatch } from 'react-redux';
// import { submitTransaction } from '../../actions';
import { useNavigate } from 'react-router-dom';


const CreateTransaction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, setformValues] = useState({
    title: '',
    amount:0,
    dateCreated:null,
    category:'Home',
    typeTransaction:'Expenses'
  })

  const handleInputChange = (event) =>{
    setformValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }
  
  

  const handleSubmit= (event)=>{
    event.preventDefault()

    dispatch(actions.submitTransaction(formValues))


    navigate('/dashboard')
  }

  return (
    <div className={style.container}>
        New transaction
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type='text' name = "title" onChange={handleInputChange} />
            <label>Type: </label>
            <select id = "type_transaction" name = "typeTransaction" onChange={handleInputChange}>
                <option value = "expenses">Expenses</option>
                <option value = "income">Income</option>
            </select>

            <label>Category:</label>
            <select id = "category" name = "category" onChange={handleInputChange}>
                <option value = "Home">Home</option>
                <option value = "Food">Food</option>
                <option value = "Laundry">Laundry</option>
            </select>

            <label>Date</label>
            <input type = "date" id = "transaction_date" name = "dateCreated" onChange={handleInputChange}/>
            
            {/* Check how to hide the spin arrows for number input */}
            <input type = "number" id= "total_transaction" placeholder='Total' name='amount' onChange={handleInputChange}/>


            <LinkRouter to = '/user'>
              Cancel
            </LinkRouter>

            <button type = "submit">
              Submit
            </button>
        </form>
    </div>
  )
}


export default CreateTransaction