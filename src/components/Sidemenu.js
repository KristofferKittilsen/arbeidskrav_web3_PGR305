import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidemenu = () => {
    return(
        <Navbar className="custom-navbar pl-1" variant="light">
          <Nav defaultActiveKey="/" className="flex-column h-100">
            <Navbar.Brand>Project Manager</Navbar.Brand>
            <Nav.Link as={Link} to="/"><FontAwesomeIcon icon="th"/> Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/employee-page"><FontAwesomeIcon icon="users"/> Employee Page</Nav.Link>
            <Nav.Link as={Link} to="/project-page"><FontAwesomeIcon icon="tasks"/> Project Page</Nav.Link>
            <Nav.Link as={Link} to="/customer-page"><FontAwesomeIcon icon="user-tag"/> Customer Page</Nav.Link>
          </Nav>
        </Navbar>
    )
}

export default Sidemenu;