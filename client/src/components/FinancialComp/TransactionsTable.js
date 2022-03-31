import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {deleteTransaction, fetchTransactions } from '../../actions';
import { connect, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import style from '../../styles/table.module.css'
import {BsTrash}from 'react-icons/bs'



const TransactionsTable = (props) => {

    const month = props.selectedDate.getMonth()
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTransactions())
        
        
        
    }, [])

    // function handleDelete(element){
    //     // dispatch(deleteTransaction(element._id))
    //     // navigate('/dashboard')
    //     console.log(element._id)
    // }

    
    const transactions = useSelector((state)=>state.transactions)

    
    const transactions_bydate = transactions.filter(obj=>new Date(obj.dateCreated).getMonth() == month)
    

    const RenderTransactions = ()=>{

        try{
            return transactions_bydate.map(element=>{
                
                return(
                    <>
                        <tr key={element._id} scope = 'row'>
                            <td >{element.title} </td>
                            <td>{element.amount} </td>
                            <td>{new Date(element.dateCreated).toLocaleDateString()} </td>
                            <td>{element.category} </td>
                            {/* <button on onClick={handleDelete(element)}>Borrar</button> */}
                            <td>
                                <Link style={{color:'gray'}}
                                    to={`/transactions/delete/${element._id}`}
                                >
                                    <BsTrash/>
                                </Link>
                            </td>

                            
                        </tr> 
                        
                    </>
                )
            })
        }catch(error){
            console.log(error)
        }

    }

  return (
    <div>
        <h2>Transactions</h2>
        <table className= 'table'>
            <tbody>
                <tr key = "headers_expenses">
                    <th scope='col'>Transaction</th>
                    <th scope='col'>Amount</th>
                    <th scope='col'>Date</th>
                    <th scope='col'>Category</th>
                    <th scope='col'>Delete</th>
                </tr>
                {RenderTransactions()}
                
            </tbody>
                
            
            
        </table>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return{
        transactions: Object.values(state.transactions)
    }
}

export default connect(mapStateToProps,{fetchTransactions})(TransactionsTable)