import React, {useState} from 'react';
import * as actions from '../../actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Link as LinkRouter} from 'react-router-dom';
import style from '../../styles/create-transaction.module.css';

const CreateBudget = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [budgetValues, setbudgetValues] = useState({
    title: '',
    amount: 0,
    dateCreated: null,
    dateFinished: null,
    category: 'Home',
    
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
    <div className={style.container}>
       <h3 style={{marginTop:'15px'}}><b>New Budget</b></h3>
      <form onSubmit={handleSubmit} className={style.formdiv}>
        <div className={style.row}>
          <label>Name:</label>
          <input type='text' className={style.width100} name = "title" onChange={handleInputChange} />
        </div>
        <div className={style.row}>
          <label className={style.label}>Category: </label>
              <select id = "category" name = "category" onChange={handleInputChange}>
                  <option value = "Home">Home</option>
                  <option value = "Food">Food</option>
                  <option value = "Laundry">Laundry</option>
              </select>
        </div>
        <div className={style.col50}>
          <label>Start date</label>
          <input type = "date" id = "transaction_date" name = "dateCreated" onChange={handleInputChange}/>
        </div>
        <div className={style.col50}>
          <label>End date</label>
          <input type = "date" id = "transaction_date_finish" name = "dateFinished" onChange={handleInputChange}/>
        </div>
        <label>Total</label>
        <input className={style.width100} type = "number" id= "total_amount" placeholder='Total budget' name='amount' onChange={handleInputChange}/>
        <div className='mb-3 form-check' >
          <LinkRouter className='btn btn-danger' style={{marginRight: '10px'}} to = '/dashboard'>
            Cancel
          </LinkRouter>

          <button className='btn btn-primary' type = "submit">
            Submit
          </button>
        </div>  
        

      </form>
    </div>
  )

}

export default CreateBudget