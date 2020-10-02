import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, FormControl, Card, Form } from "react-bootstrap";
import PageTitle from "../components/PageTitle";
import PropTypes from "prop-types";

const EmployeePage = (props) => {

    EmployeePage.propTypes = {
        employees: PropTypes.array,
        addNewEmployee: PropTypes.func
    }

    const [show, setShow] = useState(false);
    const [employeeFirstName, setEmployeeFirstName] = useState("");
    const [employeeLastName, setEmployeeLastName] = useState("");
    const [employeePosition, setEmployeePosition] = useState("");
    const [employeeStartedHere, setEmployeeStartedHere] = useState("");
    const [employeeNotes, setEmployeeNotes] = useState("");
    const [newEmployee, setNewEmployee] = useState([]);

    const imageUrl = "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w1920-q80/marquee/11/77/27/6/hero_landscape_91e1b039-11ef-4d97-a01e-639b6ee4990a.jpg"

    const getEmployees = () => {
        return props.employees.map( (employee, i) => {
            return (
                <Col className="mt-2" lg={6} key={`em-${i}`}>
                        <Card className="p-2 taskAndEmployeeCards">  
                            <Card.Img variant="top" src={imageUrl}></Card.Img>
                            <Card.Title>Name: {employee.employeeFirstName} {employee.employeeLastName}</Card.Title>
                            <Card.Text>Job: {employee.employeePosition}</Card.Text>
                            <Card.Text>Started working here: {employee.employeeStartedHere}</Card.Text>
                            <Card.Text>Notes: {employee.employeeNotes}</Card.Text>
                        </Card>
                </Col>
            )
        })
    }

    const handleChangeFirstName = (e) => {
        setEmployeeFirstName(e.target.value);
    }

    const handleChangeLastName = (e) => {
        setEmployeeLastName(e.target.value);
    }

    const handleChangePosition = (e) => {
        setEmployeePosition(e.target.value);
    }

    const handleChangeStartedHere = (e) => {
        setEmployeeStartedHere(e.target.value);
    }

    const handleChangeNotes = (e) => {
        setEmployeeNotes(e.target.value);
    }

    const handleClick = () => {
        props.addNewEmployee(employeeFirstName, employeeLastName, employeePosition, employeeStartedHere, employeeNotes);
        console.log(employeeFirstName, employeeLastName, employeePosition, employeeStartedHere, employeeNotes);
        setShow(false);
    }

    return(
        <Container>

            {/*Form for making a new employee*/}
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={6} xs={6} className="pr-0 pl-0">
                            <Container>
                                <Row className="mb-0">
                                    <Col>
                                        <Form.Label className="mb-0">Firstname</Form.Label>
                                    </Col>
                                </Row>
                                <Row className="mt-0">
                                    <Col>
                                        <FormControl 
                                            placeholder="Firstname"
                                            aria-label="Firstname"
                                            aria-describedby="basic-addon1"
                                            onChange={handleChangeFirstName}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label className="mb-0 mt-2">Position</Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormControl 
                                            placeholder="Position"
                                            aria-label="Position"
                                            aria-describedby="basic-addon1"
                                            onChange={handleChangePosition}
                                            as="select"
                                            >
                                                <option>Choose position</option>
                                                <option>Designer</option>
                                                <option>Developer</option>
                                                <option>Mail</option>
                                                <option>Server operator</option>
                                                <option>Project manager</option>
                                        </FormControl>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col lg={6} xs={6} className="pr-0 pl-0">
                            <Container>
                                <Row className="mb-0">
                                    <Col>
                                        <Form.Label className="mb-0">Lastname</Form.Label>
                                    </Col>
                                </Row>
                                <Row className="mt-0">
                                    <Col>
                                        <FormControl 
                                            placeholder="Lastname"
                                            aria-label="Lastname"
                                            aria-describedby="basic-addon1"
                                            onChange={handleChangeLastName}
                                        />   
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label className="mb-0 mt-2">Started here</Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormControl 
                                            placeholder="Started here"
                                            aria-label="Position"
                                            aria-describedby="basic-addon1"
                                            onChange={handleChangeStartedHere}
                                            type="date"
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label className="mb-0 mt-2">Notes</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormControl 
                                placeholder="Notes on this employee"
                                aria-label="Position"
                                aria-describedby="basic-addon1"
                                onChange={handleChangeNotes}
                                as="textarea"
                            />
                        </Col>
                    </Row>                      
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClick} variant="primary">Add employee</Button>
                </Modal.Footer>
            </Modal>

            <Row className="mt-4">
                <Col>
                    <PageTitle title="Employee page"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => setShow(true)}><FontAwesomeIcon icon="plus"/> Add a new employee</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                {getEmployees()}
            </Row>
            
        </Container>
    )
}

export default EmployeePage;