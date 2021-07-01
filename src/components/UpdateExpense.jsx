import React,{ useState } from "react"
import { Form, Button } from "react-bootstrap"
import {connect} from "react-redux"
import { editExpense } from "../actions/expenseActions"

const UpdatedExpenses=(props)=>{

    const [expense, setExpense]=useState({
        id:props.expenseInfo.id,
        category:props.expenseInfo.category,
        date:props.expenseInfo.date,
        item:props.expenseInfo.item,
        amount:props.expenseInfo.amount,
    })

    const handleChange=(event)=>{
        setExpense({...expense, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        props.editExpense(expense,expense.id)
        props.handleClose()
    }


    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control name="category" as="select" value={expense.category} type="text" onChange={handleChange}>
                    <option>Food</option>
                    <option>Transportation</option>
                    <option>Medical</option>
                    <option>Miscellanueos</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Item</Form.Label>
                <Form.Control name="item" value={expense.item} type="text" onChange={handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control name="amount" value={expense.amount} type="number" onChange={handleChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control name="date" value={expense.date} type="date" onChange={handleChange}/>
            </Form.Group>
            <Button size="md" variant="primary custom" type="submit" block>Record</Button>
        </Form>
    )
}

const mapDispatchToProps={editExpense}
export default connect(null, mapDispatchToProps)(UpdatedExpenses)