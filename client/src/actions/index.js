import axios from 'axios';
import {FETCH_TRANSACTION, FETCH_USER} from './types'

export const fetchUser = ()=> async dispatch=>{
    const res = await axios.get('/api/current_user');
    

    dispatch({type: FETCH_USER, payload: res.data});
};

export const testingFunc = ()=>{
    console.log("You called this action function")
}

export const submitTransaction = (values) => async dispatch=>{
    const res = await axios.post('/api/transactions', values);

    dispatch({type: FETCH_TRANSACTION, payload: res.data});
}