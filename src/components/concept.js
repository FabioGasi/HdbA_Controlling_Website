import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import implementierungImage from "../assets/Implementierung.png";

export default function Concept() {
  return (
    <section id="concept-section" className="fact-section">
      <Container>
        <Row className="align-items-center mb-4">
          <Col md={6}>
            <h2 className="main-fact">
              <strong>Green Controlling Konzept</strong>
            </h2>
            <h3 className="text-center text-white mb-4">
              Problem der Bundesagentur für Arbeit
            </h3>
          </Col>
          <Col md={6}>
            <div className="concept-image-container">
              <img
                src={implementierungImage}
                alt="BA Green Controlling Concept"
                className="concept-image"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Card className="h-100 mb-4">
              <Card.Body>
                <Card.Title>Workshop "#ThinkGreenActSmart"</Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      Ziel: Konzeption eines Workshops zum Thema Green
                      Controlling für Controller*innen und Führungskräfte
                    </li>
                    <li>
                      Methodik:Anwendung des ADDIE-Modells aus dem Bereich der
                      Pädagogik
                    </li>
                    <li>Phasen des ADDIE-Modells</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="h-100 mb-4">
              <Card.Body>
                <Card.Title>Phase 1: Analyse</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Zielgruppe: Controller*innen und Führungskräfte</li>
                    <li>
                      Lernziele: Fachwissen und Anwendung des Konzepts von Green
                      Controlling
                    </li>
                    <li>
                      Bedarfsermittlung: Ermittlung durch Befragung, Interviews
                      und Analyse vorhandene interner Dokumente
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Card className="h-100 mb-4">
              <Card.Body>
                <Card.Title>Phase 2: Design</Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      Inhalt & Aufbau: Modularer Aufbau, Modul 1: "Grundlagen",
                      Modul 2: "Umweltkennzahlen"
                    </li>
                    <li>
                      Methoden & Materialien: visuelle Präsentationen,
                      Arbeitsblätter, Metaplanwände, Moderationstafeln,
                      Flipchart, interaktive Tools
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="h-100 mb-4">
              <Card.Body>
                <Card.Title>Phase 3: Entwicklung</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Modul 3: "Green Rechner"</li>
                    <li>Modul 4: "Best Practice -Beispuele aus der Praxis"</li>
                  </ul>
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
