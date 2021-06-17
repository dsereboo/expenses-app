export function addExpense(newExpense){
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
}