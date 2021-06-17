import React,  { useState }  from "react"
import {Form,Button} from "react-bootstrap"
import {connect} from "react-redux"
import { addExpense } from "../actions/expenseActions"

const AddExpenses=(props)=>{

    const[expense,setExpense]=useState({
        item:"", category:"", amount:"", date:"",
    })

    const handleChange=(event)=>{
        setExpense({...expense, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        expense.id=Math.random().toString(36).slice(2)
        props.addNewExpense(expense)
        console.log("added")
    }
    
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control name="category" as="select" onChange={handleChange}>
                    <option>Food</option>
                    <option>Transportation</option>
                    <option>Medical</option>
                    <option>Miscellanueos</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Item</Form.Label>
                <Form.Control onChange={handleChange} name="item" type="text" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Amout</Form.Label>
                <Form.Control onChange={handleChange} name="amount" type="number"/>
            </Form.Group>Date<Form.Group>
                <Form.Label></Form.Label>
                <Form.Control onChange={handleChange} type="date" name="date"/>
            </Form.Group>
            <Button size="md" variant="primary custom" type="submit" block>Record</Button>
        </Form>
    )
}

const mapDispatchToProps={addNewExpense: addExpense}
export default connect(null, mapDispatchToProps)(AddExpenses)