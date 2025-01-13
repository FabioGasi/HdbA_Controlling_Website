import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function WhyGreenControlling() {
  return (
    <section id="fact-section" className="fact-section">
      <Container>
        <h2 className="main-fact">
          <strong>Warum Green Controlling?</strong>
        </h2>
        <Row className="mb-4">
          <Col xs={12} md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Klimawandel</Card.Title>
                <Card.Text>
                  Der Klimawandel zeigt immer häufiger seine Folgen, teils mit
                  katastrophalen Auswirkungen. Nachhaltigkeit wird daher
                  gesamtgesellschaftlich immer wichtiger und muss messbarer
                  gestaltet werden.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Umsetzungsprogramm der Bundesregierung</Card.Title>
                <Card.Text>
                  Das Bundes-Klimaschutzgesetz (B-KlimaG) legt die Grundlage für
                  die Umsetzung der Klimaschutzstrategie 2030. Es beinhaltet
                  eine Vielzahl von Maßnahmen, die Unternehmen und
                  Organisationen (BA) betreffen.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>
                  Eco-Management und Nachhaltigkeitsbericht
                </Card.Title>
                <Card.Text>
                  Zukunftsweisende Geschäfte und Umweltschutz sollen im Sinne
                  der Nachhaltigkeit verknüpft werden um zukunftssichernd zu
                  wirtschaften.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>
                  Zusammenspiel aus ökonomischen und ökologischen Aspekten
                </Card.Title>
                <Card.Text>
                  Green Controlling soll sowohl ökonomische als auch ökologische
                  Aspekte berücksichtigen. Dabei sollen Ziele und Maßnahmen in
                  einem System zusammengeführt werden.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={6} className="text-center">
            <Button
              variant="success"
              size="lg"
              href="https://drive.google.com/file/d/1HtN4q10k_BSL97Wmf95NKur1LK6ooUuA/view?usp=sharing"
              target="_blank"
              className="download-button"
            >
              Gesamten Projektbericht herunterladen
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
