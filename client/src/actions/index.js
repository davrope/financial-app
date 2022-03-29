import axios from 'axios';
import {FETCH_TRANSACTION, FETCH_USER, FETCH_TRANSACTIONS, FETCH_BUDGETS, DELETE_TRANSACTION} from './types'


export const fetchUser = ()=> async dispatch=>{
    const res = await axios.get('/api/current_user');

    dispatch({type: FETCH_USER, payload: res.data});
};


export const submitTransaction = (values) => async dispatch=>{
    const res = await axios.post('/api/transactions', values);
    
    dispatch({type: FETCH_TRANSACTION, payload: res.data});
}

export const fetchTransactions = ()=> async dispatch=>{
    const res = await axios.get('/api/transactions');

    dispatch({type: FETCH_TRANSACTIONS, payload: res.data})
}

export const deleteTransaction = id => async dispatch=>{
    await axios.delete(`/api/transactions/${id}`);

    dispatch({type:DELETE_TRANSACTION, payload:id})
}


// Budgets actions

export const submitBudget = (values) => async dispatch=>{
    const res = await axios.post('/api/budgets', values);

    dispatch({type: FETCH_BUDGETS, payload: res.data});
}

export const fetchBudgets = ()=> async dispatch=>{
    const res = await axios.get('/api/budgets');

    dispatch({type: FETCH_BUDGETS, payload: res.data})
}