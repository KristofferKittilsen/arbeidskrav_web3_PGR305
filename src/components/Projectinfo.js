import React, {useState} from "react";
import { Card, Row, ProgressBar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";


const Projectinfo = (props) => {

    Projectinfo.propTypes = {
        projectDescription: PropTypes.string,
        projectAssigned: PropTypes.string,
        projectDeadline: PropTypes.string
    }

    let {id} = useParams();
    
    const [projectProgress, setProjectProgress] = useState(60);

    return(
        <Row>
            {id === props.projectId.toString() ?
            <section>
                <Card.Text>Description: {props.projectDescription}</Card.Text>
                <Card.Text>Assigned: {props.projectAssigned}</Card.Text>
                <Card.Text>Deadline: {props.projectDeadline}</Card.Text>
                <ProgressBar variant="success" now={projectProgress} label={`${projectProgress}% Done`}/>
            </section> : 
            <p></p>}
        </Row>
        
    )
}

export default Projectinfo;