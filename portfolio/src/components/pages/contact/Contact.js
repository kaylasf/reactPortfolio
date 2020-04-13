import React from "react";
import { Link, Route } from "react-router-dom";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";

function Contact(props) {
  return (
    <div id="contact">
     
      <Container fluid className="mb-3"  >
        <Row className="justify-content-center">
      <h1 >Contact </h1>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Form>
          <Form.Group controlId="formBasicPassword">
             
              <Form.Control type="name" placeholder="Full Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>



            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
  </Button>

          </Form>
        </Col>
      
      </Row>
      </Container>
      {/* <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} /> */}
    </div>
  );
}

export default Contact;
