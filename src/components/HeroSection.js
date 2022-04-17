import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Form, FormControl, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h6>Journal of applied mathematics and recent patents on computer science</h6>
      <p>Dammitta university</p>
      <div className="hero-btns"></div>
      <Container>
        <Row>
        <Col></Col>
    
          <Col xs={6}>
           
              <Link to="./Products">
            <Form className="d-md-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-3"
                aria-label="Search"
                
              />
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                Search
              </Button>
            </Form>
            </Link> 
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
