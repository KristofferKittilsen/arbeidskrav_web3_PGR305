import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const EmployeeCard = (props) => {

    EmployeeCard.propTypes = {
        employeeName: PropTypes.string
    }

    return( 
        <Card>
            <Card.Img variant="top" src="https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w1920-q80/marquee/11/77/27/6/hero_landscape_91e1b039-11ef-4d97-a01e-639b6ee4990a.jpg"></Card.Img>
            <Card.Title>{props.employeeName}</Card.Title>
        </Card>
    )
}

export default EmployeeCard;