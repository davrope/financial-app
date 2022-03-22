import { DELETE_TRANSACTION, FETCH_TRANSACTION, FETCH_TRANSACTIONS, SUBMIT_TRANSACTION } from "../actions/types";

const initialState = []

export default function foo(state= initialState, action){
    switch(action.type){
        case FETCH_TRANSACTIONS:
            return action.payload;
        case FETCH_TRANSACTION:
            return action.payload;
        case DELETE_TRANSACTION:
            return action.payload;
        case SUBMIT_TRANSACTION:
            return action.payload;
            default:
                return {...state} 
    }
}