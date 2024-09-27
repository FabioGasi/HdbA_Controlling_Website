import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Typing } from "typed.js";

export default function Introduction() {
  return (
    <section className="introduction">
      <Container className="h-100 d-flex align-items-center justify-content-center">
        <Row className="w-100">
          <Col xs={12} className="text-center">
            <h1 style={{ color: "white", zIndex: 1, position: "relative" }}>
              e
            </h1>
          </Col>
        </Row>
      </Container>
      <Image
        src="/pfad/zum/hintergrundbild.jpg"
        alt="Hintergrundbild"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      />
    </section>
  );
}
