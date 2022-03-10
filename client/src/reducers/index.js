import { combineReducers } from "redux";
import authReducer from './authReducer';
import budgetsReducer from './budgetsReducer';
import transactionsReducer from './transactionsReducer'


export default combineReducers({
    auth: authReducer,
    budgets: budgetsReducer,
    transactions: transactionsReducer
});