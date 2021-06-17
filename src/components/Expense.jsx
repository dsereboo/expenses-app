import React,{useState} from "react"
import {Col,Card,Button,Modal} from "react-bootstrap"
import { deleteExpense } from "../actions/expenseActions"
import {connect} from "react-redux"
import UpdatedExpenses from "./UpdateExpense"

const Expense=(props)=>{
  const handleDelete = () => {
    props.deleteExpense(props.expenseData.id);
  };

  //State for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col md={{ span: 3 }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Record Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdatedExpenses expenseInfo={props.expenseData} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
      <Card>
        <Card.Body>
          <Card.Title>{props.expenseData.item}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.expenseData.date}
          </Card.Subtitle>
          <Card.Text>{props.expenseData.category}</Card.Text>
          <Card.Text>{props.expenseData.amount}</Card.Text>
          <Button variant="danger" size="sm" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="primary" size="sm" onClick={handleShow}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

const mapDispatchToProps={deleteExpense: deleteExpense}
export default connect(null, mapDispatchToProps)(Expense)