import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function CardsMenu() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm>
            <Card className="mt-3">
              <Card.Body>
                <Card.Img
                  src="https://images.unsplash.com/photo-1530959106156-50f49c30932d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  variant="top"
                />
                <Card.Title>
                  <h3 className="mt-2">Card Title</h3>
                </Card.Title>
                <Card.Text>
                  <p className="opacity-50">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde eligendi alias, nemo incidunt commodi distinctio?
                  </p>
                </Card.Text>
                <Button variant="outline-danger">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="mt-3">
              <Card.Body>
                <Card.Img
                  src="https://images.unsplash.com/photo-1530959106156-50f49c30932d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  variant="top"
                />
                <Card.Title>
                  <h3 className="mt-2">Card Title</h3>
                </Card.Title>
                <Card.Text>
                  <p className="opacity-50">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde eligendi alias, nemo incidunt commodi distinctio?
                  </p>
                </Card.Text>
                <Button variant="outline-danger">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="mt-3">
              <Card.Body>
                <Card.Img
                  src="https://images.unsplash.com/photo-1530959106156-50f49c30932d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  variant="top"
                />
                <Card.Title>
                  <h3 className="mt-2">Card Title</h3>
                </Card.Title>
                <Card.Text>
                  <p className="opacity-50">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde eligendi alias, nemo incidunt commodi distinctio?
                  </p>
                </Card.Text>
                <Button variant="outline-danger">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CardsMenu;
