import React from "react";
import {Container, Jumbotron, Row , Col, Image} from "react-bootstrap";
import kali from "../../../assets/kali.jpeg";


function About() {
  return (
    <div id="about" > 
   <Container fluid >
   <Jumbotron className="mt-4  " >
   <Row >
   <Col xs={12} md={{ span: 5, offset: 0 }} >
      <Image src={kali} style={{height:'auto',width:'100%'}}  rounded />
    </Col>
    <Col md={{ span: 7, offset: 0 }} xs={12} className="text-center " > <h1>About Me</h1>
      <p className="text-justify">
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information. This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information. This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information. This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information. This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information. This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information. This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p></Col>
  </Row>
 


</Jumbotron>

   </Container>
    </div>
  );
}

export default About;
