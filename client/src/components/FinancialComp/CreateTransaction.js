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
    typeTransaction:'expenses'
  })

  const handleInputChange = (event) =>{
    setformValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }
  
  
  const categoriesOptions = ()=>{
    switch(formValues.typeTransaction){
      case 'expenses':
        return(
          <>
            <option value="Home">Home</option>
            <option value="Food">Food</option>
            <option value="Laundry">Laundry</option>
          </>
        )
        
      case 'income':
        return(
          <>
            <option value="Salary">Salary</option>
            <option value="Investments">Investments</option>
            <option value="Freelancing">Freelancing</option>
          </>
        )    
    }

  }

  const handleInputType = (event)=>{

    switch(formValues.typeTransaction == "expenses"){
      case true:
        
        setformValues({
          ...formValues,
          [event.target.name]: event.target.value*-1
        })
        break
        
      case false:
        setformValues({
          ...formValues,
          [event.target.name]: event.target.value
        })
        
    }
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
                {categoriesOptions()}
            </select>

            <label>Date</label>
            <input type = "date" id = "transaction_date" name = "dateCreated" onChange={handleInputChange}/>
            
            {/* Check how to hide the spin arrows for number input */}
            <input type = "number" id= "total_transaction" placeholder='Total' name='amount' onChange={handleInputType}/>


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