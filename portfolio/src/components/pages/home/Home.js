import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import design from "../home/home.css";


function Home() {
  return (
    <div id="home" >
     <Container fluid >
  <Row>
    <Col xs={12} lg={12} md={12} className="text-center ">Kayla San Filippo</Col>
  </Row>
</Container>
    </div>
  );
}

export default Home;
