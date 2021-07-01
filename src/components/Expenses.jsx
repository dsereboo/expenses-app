import React from "react"
import { useEffect } from "react"
import {Container, Row} from "react-bootstrap"
import {connect} from "react-redux"
import { getExpenses } from "../actions/expenseActions"
import Expense from "./Expense"

const Expenses=(props)=>{

    useEffect(
        ()=>{
            props.getExpenses()
        }, [props]
    )

    return(
        <Container>
            <Row>
                {props.expenses.map((expense)=>
                    <Expense expenseData={expense} key={expense.id}/>
                )}
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{
        expenses: state.expenses.expenses,
    }
}

const mapDispatchToProps={
    getExpenses: getExpenses
}

export default connect(mapStateToProps,mapDispatchToProps)(Expenses)