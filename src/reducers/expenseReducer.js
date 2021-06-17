const initialState={expenses:[
    { id:"adhkjs9",item:"coke", price:5, category:"food", date:"Today!"},
    { id:"ado89",item:"coke", price:5, category:"food", date:"Today!"},
    { id:"adojo88",item:"coke", price:5, category:"food", date:"Today!"}
]}

const ExpensesReducer=(state=initialState, action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
            return{...state, expenses:[...state.expenses, action.payload]}
        case "DELETE_EXPENSE":
            console.log(action.payload)
            let delID= action.payload
            let undeletedExpenses=state.expenses.filter((expense)=> expense.id!==delID )
            return{expenses: undeletedExpenses};
        default:
            return state;
    }
}

export default ExpensesReducer