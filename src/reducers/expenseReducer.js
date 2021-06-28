const initialState={expenses:[]}

const ExpensesReducer=(state=initialState, action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
            return{...state, expenses:[...state.expenses, action.payload]}
        case "GET_EXPENSES":
            return{expenses:action.payload}
        case "DELETE_EXPENSE":
            let delID= action.payload
            let undeletedExpenses=state.expenses.filter((expense)=> expense.id!==delID )
            return{expenses: undeletedExpenses};
        case "EDIT_EXPENSE":
            let editID=action.payload.id
            let updatedExpenses=state.expenses.map((expense)=> expense.id===editID? action.payload:expense)
            return{expenses: updatedExpenses};
        default:
            return state;
    }
}

export default ExpensesReducer