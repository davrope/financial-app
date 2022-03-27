import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';

const BudgetsCards = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchBudgets())
        
        
        
    }, [])

    const budgets = useSelector((state)=>state.budgets)

    


  return (
    <div>BudgetsCards</div>
  )
}

export default BudgetsCards