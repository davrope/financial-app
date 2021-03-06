import React, { useState } from 'react';
import style from '../../styles/create-transaction.module.css';
import {Link as LinkRouter} from 'react-router-dom';
import * as actions from '../../actions';
import { useDispatch } from 'react-redux';
// import { submitTransaction } from '../../actions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


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
  
  useEffect(() => {
    if (formValues.typeTransaction == 'income'){
      setformValues({...formValues, category:'Salary'})
    }else{
      setformValues({...formValues, category:'Home'})
    }
  }, [formValues.typeTransaction])

  const handleInputChange = (event) =>{
    setformValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }
  console.log(formValues)
  
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
        <h3 style={{marginTop:'15px'}}><b>New transaction</b> </h3>
        <form onSubmit={handleSubmit} className={style.formdiv} >
          <div className={style.row}>
            <label>Name: </label>
            <input type='text' className={style.width100} name = "title" onChange={handleInputChange} />
          </div>
          <div className={style.row}>
            <div className = {style.col50}>
              <label className={style.label}>Type: </label>
              <select className={style.selection} id = "type_transaction" name = "typeTransaction" onChange={handleInputChange}>
                  <option value = "expenses">Expenses</option>
                  <option value = "income">Income</option>
              </select>

              <label className={style.label}>Category:</label>
              <select className={style.selection} id = "category" name = "category" onChange={handleInputChange}>
                  {categoriesOptions()}
              </select>
            </div>
          </div>


            
            <br></br>

            <label>Date</label>
            <input  type="date" id = "transaction_date" name = "dateCreated" onChange={handleInputChange}/>
            <br></br>
            {/* Check how to hide the spin arrows for number input */}
            <input className={style.width100} type = "number" id= "total_transaction" placeholder='Total' name='amount' onChange={handleInputType}/>
            <br></br>
            <div className='mb-3 form-check' >
              <LinkRouter className='btn btn-danger' style={{marginRight: '10px'}}  to = '/dashboard' >
                Cancel
              </LinkRouter>

              <button className='btn btn-primary' type = "submit" >
                Submit
              </button>
            </div>


        </form>
    </div>
  )
  // return (
  //   <div className={style.container}>
  //       New transaction
  //       <form onSubmit={handleSubmit}>
  //           <label>Name: </label>
  //           <input type='text' name = "title" onChange={handleInputChange} />
  //           <label>Type: </label>
  //           <select id = "type_transaction" name = "typeTransaction" onChange={handleInputChange}>
  //               <option value = "expenses">Expenses</option>
  //               <option value = "income">Income</option>
  //           </select>

  //           <label>Category:</label>
  //           <select id = "category" name = "category" onChange={handleInputChange}>
  //               {categoriesOptions()}
  //           </select>

  //           <label>Date</label>
  //           <input type = "date" id = "transaction_date" name = "dateCreated" onChange={handleInputChange}/>
            
  //           {/* Check how to hide the spin arrows for number input */}
  //           <input type = "number" id= "total_transaction" placeholder='Total' name='amount' onChange={handleInputType}/>


  //           <LinkRouter to = '/user'>
  //             Cancel
  //           </LinkRouter>

  //           <button type = "submit">
  //             Submit
  //           </button>
  //       </form>
  //   </div>
  // )
}


export default CreateTransaction