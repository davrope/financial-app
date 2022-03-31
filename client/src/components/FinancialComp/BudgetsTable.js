import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import {fetchBudgets } from '../../actions';
import {useSelector } from 'react-redux';
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
        const budget_transactions_bydate= 
            budget_transactions.filter(obj=> ((new Date(budget.dateCreated)<= new Date(obj.dateCreated))&& (new Date (obj.dateFinished<= new Date(budget.dateFinished)))))
        
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
                const sumWithInitial = -1*budget_amount_arr.reduce(
                (previousValue, currentValue)=>previousValue+currentValue,
                initial_amount
                )

                let percentage = (sumWithInitial/element.amount)*100

                const percentage_choice = ()=>{
                    if(percentage>100){
                        return "100%"
                    } else{
                        return Math.round(percentage)+"%"
                    }
                }
                const day_diff = new Date(element.dateFinished).getDate()-new Date().getDate()

                const spendPerDay =()=>{
                    const perdiem = (element.amount-sumWithInitial)/day_diff

                    if(perdiem>0){
                        return perdiem
                    } else if(perdiem<0){
                        return 0
                    } else{
                        return element.amount-sumWithInitial
                    }
                }

                const renderBudgetMessage =()=>{
                    if(day_diff<0){
                        return (<p style={{color:'red'}}>This budget has expired!</p> )
                    }else{
                        return (<p>You can spend {spendPerDay()} per day</p>)
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
                                <p>
                                    Category: {element.category}
                                </p>
                            </div>

                            <h3 className={styles.budget_balance} >
                               {sumWithInitial} /{element.amount}
                            </h3>
                        </div>

                        <div className={styles.bottom_container} >
                            {renderBudgetMessage()}
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