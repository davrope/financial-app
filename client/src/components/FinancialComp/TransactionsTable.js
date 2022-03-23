import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {fetchTransactions } from '../../actions';
import { connect, useSelector } from 'react-redux';

const TransactionsTable = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTransactions())
        
        
        
    }, [])

    
    const transactions = useSelector((state)=>state.transactions)
    // const transactions = useSelector((state)=>state.transactions)
    
    // console.log(transactions)
    // console.log(typeof(transactions))
    // console.log(transactions.map(element=>element.title))

    
    

    const RenderTransactions = ()=>{

        try{
            transactions.map(element=>{
                console.log(element)
                // console.log(element)
                return(
                    
                        <tr>
                            <td>{element.title} </td>
                            <td>{element.amount} </td>
                            <td>{element.dateCreated} </td>
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
        <h2>Table title</h2>
        <table>
            <tbody>
                <tr>
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