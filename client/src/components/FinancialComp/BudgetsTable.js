import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import {fetchBudgets } from '../../actions';
import { connect, useSelector } from 'react-redux';
import styles from '../../styles/budgetCards.module.css'

const BudgetsTable = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchBudgets())
        
        
        
    }, [])

    const budgets = useSelector((state)=>state.budgets)
    const transactions = useSelector((state)=>state.transactions);

    const fetchBudgetTransactions = (budget)=>{
        const budget_transactions = transactions.filter(obj=>obj.category ==budget.category)
        const budget_transactions_bydate = budget_transactions.filter(obj=>new Date (budget.dateCreated)<= new Date(obj.dateCreated) <= new Date(budget.dateFinished))

        return  budget_transactions_bydate
    }


    const renderBudgetsCards = ()=>{
        
        try{
            return budgets.map(element=>{
                const budget_transactions_arr = fetchBudgetTransactions(element);
                const budget_amount_arr = budget_transactions_arr.map(function(obj){
                    return obj.amount
                  })
                const initial_amount = 0;
                const sumWithInitial = budget_amount_arr.reduce(
                (previousValue, currentValue)=>previousValue+currentValue,
                initial_amount
                )

                let percentage = (sumWithInitial/element.amount)*100

                const percentage_choice = ()=>{
                    if(percentage>100){
                        return "100%"
                    } else{
                        return percentage+"%"
                    }
                }
               
                
                return(
                    <div className={styles.card_horizontal} >
                        <div className={styles.top_container}>
                            <div  className={styles.left_container}>
                                <h2>
                                    {element.title}
                                </h2>
                                <p>
                                    Period: {new Date(element.dateCreated).toLocaleDateString() } - {new Date(element.dateFinished).toLocaleDateString() }
                                </p>
                            </div>

                            <h3 className={styles.budget_balance} >
                               {sumWithInitial} /{element.amount}
                            </h3>
                        </div>

                        <div className={styles.bottom_container} >
                            <p>You can spend X per day</p>
                            <div className='progress'>
                                <div className='progress-bar' role= 'progressbar' style={{width: percentage_choice(), ariaValuenow: "25"}}>
                                    {percentage_choice()}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }catch(error){
            console.log(error)
        }
    }

    
  return (
    <div>
        <h2>Budgets</h2>
        {renderBudgetsCards()}
    </div>
  )
}

export default BudgetsTable