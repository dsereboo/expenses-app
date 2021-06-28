/*export function addExpense(newExpense){
    return{
        type:"ADD_EXPENSE",
        payload:newExpense,
    }
}

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
}*/


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
                dispatch({type:"GET_EXPENSES", payload:allExpenses, })
            }
        )
        .catch(
            ()=>{console.log("Error in retrieving from firestore")}
        )
    }
}

export const editExpense=(updatedExpense,expenseId)=>{
    return(dispatch,state,{getFirestore})=>{
        //async call to return firebase firestore
        const db= getFirestore()
        //edit expense record 
        db.collection("expenses").doc(expenseId).update(updatedExpense)
        .then(
            dispatch({type:"EDIT_EXPENSE", payload:updatedExpense,})
        )
        .catch(
            console.log("Error updating expense record")
        )
    }
}

export const deleteExpense=(expenseId)=>{
    return(dispatch, state, {getFirestore})=>{
        //async call to return firebase firestore
        const db= getFirestore()
        //delete data from firestire
        db.collection('expenses').doc(expenseId).delete()
        .then(
            dispatch({type:"DELETE_EXPENSE", payload:expenseId})
        )
        .catch(
            ()=>{console.log("Error deleting expense record")}
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