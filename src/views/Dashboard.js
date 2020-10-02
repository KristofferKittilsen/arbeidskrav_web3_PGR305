import React, {useState} from "react";
import { Card, Col, Container, Row, ProgressBar } from "react-bootstrap";
import PageTitle from "../components/PageTitle";
import PropTypes from "prop-types";

const Dashboard = (props) => {

    Dashboard.propTypes = {
        projects: PropTypes.array
    }

    const [adminFirstName, setAdminFirstName] = useState ("John");
    const [adminLastName, setAdminLastName] = useState ("Doe");
    const [projectProgress, setProjectProgress] = useState(60)

    const getProjects = () => {
        if (adminFirstName === "John" && adminLastName === "Doe") {
            return props.projects.map( (project, i) => {
                return (
                    <Col lg={5} key={`pr-${i}`}>
                        <Card className="p-3 mb-4 taskAndEmployeeCards">
                            <Card.Title>Task: {project.projectTitle}</Card.Title>
                            <hr></hr>
                            <Card.Text>Description: {project.projectDescription}</Card.Text>
                            <hr></hr>
                            <ProgressBar variant="success" now={projectProgress} label={`${projectProgress}% Done`}/>
                        </Card>
                    </Col>
                )
            })
        } else {
            return (
                <></>
            )
        }
    }

    return(
        <Container className="mt-4">
            <Row>
                <Col>
                    <PageTitle title="Dashboard"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="dashboard-card">
                        <Card.Body>
                            <Card.Title>Welcome back, <span className="highlight-text">{adminFirstName} {adminLastName}</span></Card.Title>
                            <Card.Text>There are <span className="highlight-text">{props.projects.length}</span> project(s) to finish today</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h3>My projects</h3>
                </Col>
            </Row>
            <Row>
                {getProjects()}
            </Row>
        </Container>
    )
}

export default Dashboard;