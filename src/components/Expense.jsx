import React from "react"
import {Col,Card,Button} from "react-bootstrap"
import { deleteExpense } from "../actions/expenseActions"
import {connect} from "react-redux"

const Expense=(props)=>{

    const handleDelete=()=>{
        props.deleteExpense(props.expenseData.id)
    }
    return (
      <Col md={{ span: 3 }}>
        <Card>
          <Card.Body>
            <Card.Title>{props.expenseData.item}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" >{props.expenseData.date}</Card.Subtitle>
            <Card.Text>{props.expenseData.category}</Card.Text>
            <Card.Text>{props.expenseData.amount}</Card.Text>
            <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
            <Button variant="primary" size="sm">Edit</Button>
          </Card.Body>
        </Card>
      </Col>
    );
}

const mapDispatchToProps={deleteExpense: deleteExpense}
export default connect(null, mapDispatchToProps)(Expense)