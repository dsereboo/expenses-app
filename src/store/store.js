import { reactReduxFirebase,getFirebase } from "react-redux-firebase"
import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import { reduxFirestore, getFirestore } from "redux-firestore"
import thunk from "redux-thunk"
import ExpensesReducer from "../reducers/expenseReducer"
import firebase from "../config"


const combinedReducers=combineReducers({
    expenses:  ExpensesReducer,
})

export const store= createStore(
    combinedReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
        reactReduxFirebase(firebase),
        reduxFirestore(firebase)
    )
)