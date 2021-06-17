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