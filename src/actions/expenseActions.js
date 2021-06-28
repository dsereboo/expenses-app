/*export function addExpense(newExpense){
    return{
        type:"ADD_EXPENSE",
        payload:newExpense,
    }
}*/

import Expenses from "../components/Expenses";

export function deleteExpense(expenseID){
    return{
        type:"DELETE_EXPENSE",
        payload:expenseID,
    }
}


export function editExpense(updatedExpense){
    return{
        type:"EDIT_EXPENSE",
        payload: updatedExpense,
    }
}

export function getExpenses(){
    return(dispatch, state, {getFirestore})=>{
        const db= getFirestore();
        //get data from firestore collection
        db.collection('expenses').get()
        .then(
            (result)=>{
                let allExpenses=[]
                result.forEach((expense)=>{
                    allExpenses.push({...expense.data(), id:expense.id
                    })
                })
                console.log(allExpenses)
                dispatch({type:"GET_EXPENSES", payload:allExpenses, })
            }
        )
        .catch(
            ()=>{console.log("Error in retrieving from firestore")}
        )
    }
}

export const addExpense=(expense)=>{
    return(dispatch,state,{getFirestore})=>{
        //async call to firebase to create project and return the result
        const db=getFirestore() ;
        //add data to firestore collection using the firestore object
        db.collection('expenses').add(expense)
        .then(
            ()=>{
                //When async call is successful dispatch redux action
                dispatch({type: "ADD_USER", payload: expense,});
            }
        )
        .catch(
            (err)=>{
                //if async call fails, log to error log or some mechanism
                console.log(err)
            }
        )
        //asynchronous call to firebase to create users and return result
       
}
}