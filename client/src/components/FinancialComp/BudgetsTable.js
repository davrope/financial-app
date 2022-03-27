import React, {useEffect} from 'react'
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

    const renderBudgetsCards = ()=>{
        try{
            return budgets.map(element=>{
                return(
                    <div className={styles.card_horizontal} >
                        <div className={styles.top_container}>
                            <div  className={styles.left_container}>
                                <h2>
                                    {element.title}
                                </h2>
                                <p>
                                    Period: {new Date(element.dateFinished).toLocaleDateString() } - {new Date(element.dateCreated).toLocaleDateString() }
                                </p>
                            </div>

                            <h3 className={styles.budget_balance} >
                                543/{element.amount}
                            </h3>
                        </div>

                        <div className={styles.bottom_container} >
                            <p>You can spend X per day</p>
                            <div>
                                Progress bar
                            </div>
                        </div>
                    </div>
                )
            })
        }catch(error){
            console.log(error)
        }
    }

    // const RenderBudgets = ()=>{
    //     try{
    //         return budgets.map(element=>{
    //             return(
    //                 <tr key={element.id}>
    //                     <td>{element.title}</td>
    //                     <td>{element.amount} </td>
    //                     <td>{new Date(element.dateCreated).toLocaleDateString() } </td>
    //                     <td>{new Date(element.dateFinished).toLocaleDateString() } </td>
    //                     <td>{element.category} </td>
    //                 </tr>
    //             )
    //         })
    //     }catch(error){
    //         console.log(error)
    //     }
    // }
    
  return (
    <div>
        <h2>Budgets</h2>
        {/* <table>
            <tbody>
                <tr key = "headers_budgets">
                    <th>Budget name</th>
                    <th>Amount</th>
                    <th>Date start</th>
                    <th>Date end</th>
                    <th>Category</th>
                </tr>
                {RenderBudgets()}
            </tbody>
        </table> */}
        {renderBudgetsCards()}
    </div>
  )
}

export default BudgetsTable