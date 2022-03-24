import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {fetchBudgets } from '../../actions';
import { connect, useSelector } from 'react-redux';

const BudgetsTable = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchBudgets())
        
        
        
    }, [])

    const budgets = useSelector((state)=>state.budgets)

    const RenderBudgets = ()=>{
        try{
            return budgets.map(element=>{
                return(
                    <tr key={element.id}>
                        <td>{element.title}</td>
                        <td>{element.amount} </td>
                        <td>{new Date(element.dateCreated).toLocaleDateString() } </td>
                        <td>{new Date(element.dateFinished).toLocaleDateString() } </td>
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
        <h2>Budgets</h2>
        <table>
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
        </table>
    </div>
  )
}

export default BudgetsTable