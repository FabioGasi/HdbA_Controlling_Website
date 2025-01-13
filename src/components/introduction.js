import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypingAnimation from "./typing";

export default function Introduction() {
  return (
    <section id="introduction" className="introduction">
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <Row className="w-100">
          <Col xs={12} className="text-center">
            <TypingAnimation />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
