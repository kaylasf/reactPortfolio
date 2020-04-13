import React from "react";
import { Navbar, Container, Nav , Row ,Col} from "react-bootstrap";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer(props) {
    return (
        <div>
            <Navbar className="p-0 justify-content-center" expand="sm" variant="light" bg="light" sticky="bottom" >
                <Row> 
                    <Col xs={12} md={12} className="p-0">
                    <Navbar.Brand href="https://www.linkedin.com/in/kayla-san-filippo-116bb6173/" target="blank"><FaLinkedinIn /></Navbar.Brand>
                    <Navbar.Brand href="https://github.com/kaylasf" target="blank"><FaGithub /></Navbar.Brand>
                    </Col>
                    <Col xs={12} md={12} className="p-0">
                    <Navbar.Brand >Copyright</Navbar.Brand>
                    </Col>
                </Row>

            </Navbar>



        </div>
    );
}

export default Footer;
