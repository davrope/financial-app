import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {fetchTransactions } from '../../actions';
import { connect, useSelector } from 'react-redux';
import style from '../../styles/table.module.css'


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
                        <tr key={element.id}>
                            <td>{element.title} </td>
                            <td>{element.amount} </td>
                            <td>{new Date(element.dateCreated).toLocaleDateString()} </td>
                            <td>{element.category} </td>
                        </tr>
                    

                )
            })
        }catch(error){
            console.log(error)
        }

    }

  return (
    <div>
        <h2>Transactions</h2>
        <table className= {style.transactionTable}>
            <tbody>
                <tr key = "headers_expenses">
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Category</th>
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