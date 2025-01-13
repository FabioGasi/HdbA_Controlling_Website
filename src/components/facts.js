import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import teilprogrammeImage from "../assets/Teilprogramme.png";

export default function Facts() {
  return (
    <section id="general-facts" className="fact-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="main-fact">
              <strong>Aktueller Stand der Umsetzung</strong>
            </h2>
            <div className="facts-image-container mb-4">
              <img
                src={teilprogrammeImage}
                alt="Green Controlling Facts"
                className="facts-image"
              />
            </div>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={12}>
                <Card className="h-100 mb-4">
                  <Card.Body>
                    <Card.Title>Definition grüner Kennzahlen</Card.Title>
                    <Card.Text>
                      Die BA orientiert sich an den EMAS-Kennzahlen. Man startet
                      mit den 9 EMAS-Kernindikatoren: Energieeffizienz,
                      Materialeffizienz, Wasser, Abfall, biologische Vielfalt,
                      Emissionen.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12}>
                <Card className="h-100 mb-4">
                  <Card.Body>
                    <Card.Title>Berichtswesen</Card.Title>
                    <Card.Text>
                      Entwicklung eines einheitlichen Berichtswesens ab Anfang
                      2024 für alle Organisationsebenen.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12}>
                <Card className="h-100 mb-4">
                  <Card.Body>
                    <Card.Title>Eröffnungsbilanz</Card.Title>
                    <Card.Text>
                      Mitte 2024 sollen die Voraussetzungen für eine
                      Bilanzierung basierend auf den Daten von 2023 geschaffen
                      sein.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Interdisziplinäre Zusammenarbeit</Card.Title>
                    <Card.Text>
                      Interdisziplinäre Arbeitsgruppen sollen relevante
                      Kennzahlen in Bereichen wie Infrastruktur, Mobiliät und IT
                      im Jahr 2024 erstellen.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
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
