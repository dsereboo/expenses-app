import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row , Col, Modal} from "react-bootstrap"
import FloatButton from './components/FloatButton';
import AddExpenses from "./components/AddExpense";
import Expenses from "./components/Expenses";

function App() {

  //State for modal
  const[show,setShow]= useState(false)
  const handleClose=()=>setShow(false)
  const handleShow=()=> setShow(true)


  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Record Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddExpenses/>
        </Modal.Body>
      </Modal>
      <Row className="no-flex">
        <h1 className="text-center">Expense Tracker</h1>
      </Row>
      <Row>
        <Col>
          <Expenses/>
        </Col>
        <FloatButton handleShow={handleShow}/>
      </Row>
    </Container>
  )
}

export default App;
