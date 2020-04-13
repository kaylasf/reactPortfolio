import React, {useState} from "react";
import {Container, Image, Row , Col, Accordion,Card,Button} from "react-bootstrap";
import work from "../projects/projects.json"
import img1 from "../../../assets/imgs/burger.png"
import img2 from "../../../assets/imgs/scheduler.png"
import img3 from "../../../assets/imgs/pw.png"
import img4 from "../../../assets/imgs/quiz.png"
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function Project() {

  const [portfolioState, setportfolioState] = useState({
    projects: work,
    images: [img1, img2, img3, img4]
    
})
  return (
    <div id="projects">
   
       <Container fluid  >
       <Accordion >
  <Card>
    <Card.Header >
      <Accordion.Toggle as={Button} variant="link" eventKey="0" >
        <Row className="justify-content-center">
        Click for Projects
        </Row>
      </Accordion.Toggle>
    </Card.Header>

    
    <Accordion.Collapse eventKey="0">
      <Card.Body>
    
        <Row>
        {work.map((works,i) =>(
       
          <Col xs={6} md={4} >
            <a href={works.href} target="blank">
          <Image src={portfolioState.images[i]} style={{height:'auto',width:'100%'}}  rounded />
          </a>
        </Col>
        ))}
        </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>

</Accordion>



   </Container>
  
    </div>
  );
}

export default Project;
