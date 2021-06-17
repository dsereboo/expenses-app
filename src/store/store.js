import {createStore} from "redux"
import ExpensesReducer from "../reducers/expenseReducer"

export const store= createStore(ExpensesReducer)