import React, {useState} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidemenu from "./components/Sidemenu"
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Dashboard from "./views/Dashboard"
import EmployeePage from "./views/EmployeePage"
import ProjectPage from './views/ProjectPage';
import SidemenuMobile from "./components/SidemenuMobile"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faTh, faUsers, faTasks, faUserTag, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import CustomerPage from './views/CustomerPage';
library.add(fab, faCoffee, faTh, faUsers, faTasks, faUserTag, faPlus, faSearch)


let employeeArray = [{employeeFirstName: "John", employeeLastName: "Doe", employeePosition: "Developer", employeeStartedHere: "2020-01-02", employeeNotes: "This employee works very efficiantly"}];
let projectArray = [{projectTitle: "Program every page", projectDescription: "We need to program every page on this mandatory assignment", projectAssigned: "John Doe", projectDeadline: "2020-02-10"},
                    {projectTitle: "Making a searchbar", projectDescription: "We need outside knowlage for this, this is hard", projectAssigned: "Kristoffer Kittilsen", projectDeadline: "2020-02-10"}];
let customerArray = [{customerFirstName: "John", customerLastName: "Doe"}, {customerFirstName: "Ola", customerLastName: "Normann"}];


function App() {

  const [employees, setEmployees] = useState(employeeArray);
  const [projects, setProjects] = useState(projectArray);
  const [customers, setCustomers] = useState(customerArray);

  const addNewEmployee = (employeeFirstName, employeeLastName, employeePosition, employeeStartedHere, employeeNotes) => {
    setEmployees([...employees, {employeeFirstName, employeeLastName, employeePosition, employeeStartedHere, employeeNotes}])
  }

  const addNewProject = (projectTitle, projectDescription, projectAssigned, projectDeadline) => {
    setProjects([...projects, {projectTitle, projectDescription, projectAssigned, projectDeadline}]);
  }

  return (
    <>
      <Router>
        <Container className="ml-0 h-100 justify-content-center">
          <Row className="w-100">
            <Col lg={2} className="pr-0 d-block d-lg-none">
              <SidemenuMobile />
            </Col>
          </Row>
          <Row className="h-100">
            <Col lg={2} className="d-none d-lg-block pl-0">
              <Sidemenu />
            </Col>
            <Col lg={7}>
              <Container>
                <main>
                  <Route exact path="/">
                    <Dashboard projects={projects}></Dashboard>
                  </Route>
                  <Route path="/employee-page">
                    <EmployeePage employees={employees} addNewEmployee={addNewEmployee}></EmployeePage>
                  </Route>
                  <Route path="/project-page">
                    <ProjectPage projects={projects} addNewProject={addNewProject} employees={employees}></ProjectPage>
                  </Route>
                  <Route path="/customer-page">
                    <CustomerPage customers={customers}></CustomerPage>
                  </Route>
                </main>
              </Container>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
