import { DELETE_BUDGET, FETCH_BUDGET, FETCH_BUDGETS } from "../actions/types";

const initialState = []

export default function foo(state= initialState, action){
    switch(action.type){
        case FETCH_BUDGETS:
            return action.payload;
        case FETCH_BUDGET:
            return action.payload;
        case DELETE_BUDGET:
            return action.payload;
            default:
                return {...state} 
    }
}