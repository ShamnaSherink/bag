import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Footer() {
  return (
    <div>
      <Container fluid className="footer-bottom text-white">
        <Container>
          <Row className="pt-4">
            <Col md={3}>
              <h6>Contact Us</h6>
              <ul className="list-unstyled">
                <li>Site Map</li>
                <li>Site Credits</li>
                <li>Support</li>
                <li>Careers</li>
                <li>Services</li>
                <li>Locations</li>
              </ul>
            </Col>
            <Col md={3}>
              <h6>Company</h6>
              <ul className="list-unstyled">
                <li>Feedback</li>
                <li>Technical Support</li>
                <li>Sales Team</li>
                <li>Products</li>
                <li>Find A Store</li>
              </ul>
            </Col>
            <Col md={3}>
              <h6>Useful Links</h6>
              <ul className="list-unstyled">
                <li>Help Center</li>
                <li>Case Studies</li>
                <li>Events</li>
                <li>Privacy Policy</li>
                <li>Partners</li>
              </ul>
            </Col>
            <Col md={3}>
              <h6>Newsletter</h6>
              <p style={{ fontSize: '17px' }}>Emphasize the ability to provide value in a flexible manner</p>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2">
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col>
              <p className="small">
                * Our bags are ideal for students, travelers, and professionals who need to carry essentials hands-free...
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
