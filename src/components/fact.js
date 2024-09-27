import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Fact() {
    return(
        <section id="general-facts">
        <Container>
      <Row>
      <Col xs={6} md={4}>
          <Image src="./src/assets/profile.png" alt="profile" thumbnail/>
        </Col>
        <Col> <div> lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor </div>
        <div> lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor </div>
        <div> lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor </div>
         </Col>
      </Row>
      
    </Container>
        </section>
    )
}