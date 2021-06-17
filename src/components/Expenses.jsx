import React from "react"
import {Container, Row} from "react-bootstrap"
import {connect} from "react-redux"
import Expense from "./Expense"

const Expenses=(props)=>{
    return(
        <Container>
            <Row>
                {props.expenses.map((expense)=>
                    <Expense expenseData={expense}/>
                )}
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{
        expenses: state.expenses,
    }
}

export default connect(mapStateToProps,{})(Expenses)