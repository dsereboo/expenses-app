import React from "react"
import {Form} from "react-bootstrap"

const AddExpenses=()=>{
    return(
        <Form>
            <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control name="category" as="select">
                    <option>Food</option>
                    <option>Transportation</option>
                    <option>Medical</option>
                    <option>Miscellanueos</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Item</Form.Label>
                <Form.Control name="item" type="text" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Anout</Form.Label>
                <Form.Control name="amount" type="number"/>
            </Form.Group>Date<Form.Group>
                <Form.Label></Form.Label>
                <Form.Control type="date" name="date"/>
            </Form.Group>
        </Form>
    )
}
export default AddExpenses