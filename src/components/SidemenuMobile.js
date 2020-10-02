import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SidemenuMobile = () => {
    return(
        <Navbar className="custom-navbar-mobile" fixed="top">
            <Nav className="w-100">
                <Nav.Link className="mobilesize-link ml-1" as={Link} to="/"><FontAwesomeIcon icon="th"/> Dashboard</Nav.Link>
                <Nav.Link className="mobilesize-link" as={Link} to="/employee-page"><FontAwesomeIcon icon="users"/> Employee Page</Nav.Link>
                <Nav.Link className="mobilesize-link" as={Link} to="/project-page"><FontAwesomeIcon icon="tasks"/> Project Page</Nav.Link>
                <Nav.Link className="mobilesize-link" as={Link} to="/customer-page"><FontAwesomeIcon icon="user-tag"/> Customer Page</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default SidemenuMobile;