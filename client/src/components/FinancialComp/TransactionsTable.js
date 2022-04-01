import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {fetchTransactions } from '../../actions';
import { connect, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import {BsTrash}from 'react-icons/bs'
import {exportTableToCSV} from '../../utils/utils.js'


const TransactionsTable = (props) => {

    const month = props.selectedDate.getMonth()


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTransactions())
        
        
        
    }, [])


    
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
        <button onClick= {()=>exportTableToCSV('transactions.csv')}>
            Download (CSV)
        </button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return{
        transactions: Object.values(state.transactions)
    }
}

export default connect(mapStateToProps,{fetchTransactions})(TransactionsTable)