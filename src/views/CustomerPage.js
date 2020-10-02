import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PageTitle from "../components/PageTitle";
import PropTypes from "prop-types";

const CustomerPage = (props) => {

    CustomerPage.propTypes = {
        customers: PropTypes.array
    }

    const getCustomers = () => {
        return props.customers.map( (customer, i) => {
            return (      
              <Col className="mb-3 mr-0" lg={5} key={`cu-${i}`}>
                  <Card className="p-1 taskAndEmployeeCards">
                      <Card.Title>{customer.customerFirstName} {customer.customerLastName}</Card.Title>
                  </Card>
              </Col>
            )
        })
    }

    return(
        <Container>

            

            <Row className="mt-4">
                <Col>
                    <PageTitle title="Customer page"/>
                </Col>
            </Row>
            <Row>
                {getCustomers()}
            </Row>
        </Container>
    )
}

export default CustomerPage;