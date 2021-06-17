const initialState={expenses:[
    { id:"adhkjs9",item:"coke", amount:5, category:"food", date:"2012-06-17"},
    { id:"ado89",item:"coke", amount:5, category:"food", date:"2012-06-17"},
    { id:"adojo88",item:"coke", amount:5, category:"food", date:"2012-06-17"}
]}

const ExpensesReducer=(state=initialState, action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
            return{...state, expenses:[...state.expenses, action.payload]}
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