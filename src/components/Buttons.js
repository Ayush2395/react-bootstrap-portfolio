import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Buttons({ mywork, contact }) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button as={Link} to="/mywork" variant="outline-warning">
              {mywork}
            </Button>
          </Col>
          <Col>
            <Button as={Link} to="/contact" variant="outline-warning">
              {contact}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Buttons;
