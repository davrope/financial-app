import axios from 'axios';
import {FETCH_TRANSACTION, FETCH_USER, FETCH_TRANSACTIONS} from './types'

export const fetchUser = ()=> async dispatch=>{
    const res = await axios.get('/api/current_user');
    

    dispatch({type: FETCH_USER, payload: res.data});
};


export const submitTransaction = (values) => async dispatch=>{
    const res = await axios.post('/api/transactions', values);
    console.log(res)

    dispatch({type: FETCH_TRANSACTION, payload: res.data});
}

export const fetchTransactions = ()=> async dispatch=>{
    const res = await axios.get('/api/transactions');

    dispatch({type: FETCH_TRANSACTIONS, payload: res.data})
}