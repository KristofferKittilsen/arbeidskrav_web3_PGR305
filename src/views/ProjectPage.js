import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, FormControl, Card, Form } from "react-bootstrap";
import PageTitle from "../components/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {BrowserRouter, Link, useRouteMatch, Route} from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Projectinfo from "../components/Projectinfo";

const ProjectPage = (props) => {

    let { url, path } = useRouteMatch();

    ProjectPage.propTypes = {
        projects: PropTypes.array,
        employees: PropTypes.array,
        addNewProject: PropTypes.func
    }

    const [show, setShow] = useState(false);
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectAssigned, setProjectAssigned] = useState("");
    const [projectDeadline, setProjectDeadline] = useState("");
    const [projectProgress, setProjectProgress] = useState(60);

    const [less, setLess] = useState("more");

    const [searchInput, setSearchInput] = useState("");
    const [filteredList, setFilteredList] = useState(props.projects);

    /*GetEmployees is for the list inside the modal*/
    const getEmployees = () => {
        if(props.employees.map.length >= 1) {
            return props.employees.map( (employee, i) => {
                return (
                    <option key={`em-${i}`}>{employee.employeeFirstName}</option>
                )
            })
        } else {
            return <option>No employees in system</option>
        }
    }

    const handleChangeProjectTitle = (e) => {
        setProjectTitle(e.target.value);
    }

    const handleChangeProjectDescription = (e) => {
        setProjectDescription(e.target.value);
    }

    const handleChangeProjectDeadLine = (e) => {
        setProjectDeadline(e.target.value);
    }

    const handleChangeProjectAssigned = (e) => {
        setProjectAssigned(e.target.value);
    }

    const handleProjectClick = () => {
        props.addNewProject(projectTitle, projectDescription, projectAssigned, projectDeadline);
        
        setFilteredList([...filteredList, {projectTitle, projectDescription, projectAssigned, projectDeadline}]);

        setShow(false);
    }

    const handleFiltering = e => {
        let oldList = props.projects.map(project => {
            return {projectTitle: project.projectTitle, projectDescription: project.projectDescription, projectAssigned: project.projectAssigned, projectDeadline: projectDeadline};
        });

        if (e) {
            let newList = [];

            setSearchInput(e);
            newList = oldList.filter(project =>
                project.projectTitle.includes(searchInput.charAt(0).toUpperCase())
            );

            setFilteredList(newList);
        } else {
            setFilteredList(props.projects)
        }
    }

    const handleToggleBtn = () => {
        if (less === "more") {
            setLess("less")
        } else {
            setLess("more")
        }
    }

    return(
        <Container>

            {/*Modal for adding new project*/}
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col lg={6} className="pr-0 pl-0">
                            <Container>
                                <Row className="mb-0">
                                    <Col>
                                        <Form.Label className="mb-0">Project title</Form.Label>
                                    </Col>
                                </Row>
                                <Row className="mt-0">
                                    <Col>
                                        <FormControl 
                                            placeholder="Title"
                                            aria-label="Title"
                                            aria-describedby="basic-addon1"
                                            onChange={handleChangeProjectTitle}
                                        />
                                    </Col>
                                </Row>
                                <Row className="mt-2">
                                    <Col>
                                        <Form.Label className="mb-0">Coose employee</Form.Label>
                                    </Col>
                                </Row>
                                <Row className="mt-0">
                                    <Col>
                                        <FormControl as="select" size="sm" onChange={handleChangeProjectAssigned}>
                                            <option>Choose employee</option>
                                            {getEmployees()}
                                        </FormControl>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col lg={6} className="pr-0 pl-0">
                            <Container>
                                <Row>
                                    <Col>
                                        <Form.Label className="mb-0">Deadline</Form.Label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormControl 
                                            placeholder="Deadline"
                                            aria-label="Deadline"
                                            aria-describedby="basic-addon1"
                                            onChange={handleChangeProjectDeadLine}
                                            type="date"
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label className="mb-0 mt-2">Project description</Form.Label>
                        </Col>
                    </Row> 
                    <Row>
                        <Col>
                            <FormControl 
                                placeholder="Description"
                                aria-label="Description"
                                aria-describedby="basic-addon1"
                                onChange={handleChangeProjectDescription}
                                as="textarea"
                            />
                        </Col>
                    </Row>     
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleProjectClick} variant="primary">Add new project</Button>
                </Modal.Footer>
            </Modal>



            <Row className="mt-4">
                <Col>
                    <PageTitle title="Project page"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => setShow(true)}><FontAwesomeIcon icon="plus"/> Add a new project</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="mt-2 mb-0">Search for projects by task</p>
                    <input placeholder="Filter projects" className="projectSearchInput" onChange={e => handleFiltering(e.target.value)}></input>
                    <Container>
                        <Row>
                            {filteredList.map((project, i) => (
                                <Col className="p-0 mr-2 mt-4" lg={5} key={`pr-${i}`}>
                                    <Card className="p-3 taskAndEmployeeCards">
                                        <Card.Title>Task: {project.projectTitle}</Card.Title>
                                        <BrowserRouter>
                                            <Row className="mt-2 mb-2">
                                                <Col>
                                                    <Link className="mt-3 mb-3" to={() => {
                                                        if (less === "more") {
                                                            return (`${url}/projectinfo/${i}`)
                                                        } else {
                                                            return (`${url}`)
                                                        }
                                                    }}>
                                                        <Button variant="success" onClick={handleToggleBtn} className="showMoreLessBtn">Show {less}</Button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                            

                                            <Switch className="pl-3">
                                                <Route path={`${path}/projectinfo/:id`}>
                                                    <Projectinfo projectId={i} projectDescription={project.projectDescription} projectAssigned={project.projectAssigned} projectDeadline={project.projectDeadline}></Projectinfo>
                                                </Route>
                                            </Switch>
                                        </BrowserRouter>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectPage;