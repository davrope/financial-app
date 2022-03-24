import React, {useState} from 'react';
import * as actions from '../../actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Link as LinkRouter} from 'react-router-dom';


const CreateBudget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [budgetValues, setbudgetValues] = useState({
    title: '',
    amount: 0,
    dateCreated: null,
    dateFinished: null,
    category: null,
    
  })

  const handleInputChange= (event) =>{
    setbudgetValues({
      ...budgetValues,
      [event.target.name]: event.target.value
    }) 
  }

  const handleSubmit = (event)=>{
    event.preventDefault()

    dispatch(actions.submitBudget(budgetValues))

    navigate('/dashboard')
  }


  return (
    <div>
      New Budget
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' name = "title" onChange={handleInputChange} />

        <label>Category:</label>
            <select id = "category" name = "category" onChange={handleInputChange}>
                <option value = "Home">Home</option>
                <option value = "Food">Food</option>
                <option value = "Laundry">Laundry</option>
            </select>
        <label>Start date</label>
        <input type = "date" id = "transaction_date" name = "dateCreated" onChange={handleInputChange}/>

        <label>End date</label>
        <input type = "date" id = "transaction_date_finish" name = "dateFinished" onChange={handleInputChange}/>

        <input type = "number" id= "total_amount" placeholder='Total budget' name='amount' onChange={handleInputChange}/>

        
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

export default CreateBudget