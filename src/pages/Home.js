import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "../components/ParticlesBackground";

function Home() {
  return (
    <div>
      <div className="home-section">
          <ParticlesBackground />
        <div className="content">
          <span className="hello">Hi I'm</span>
          <h1>Ayush</h1>
          <p>
            I'm&nbsp;
            <span className="type-text">
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={70}
                delaySpeed={1500}
                words={[
                  "Web developer",
                  "Freelancer",
                  "Video Editor",
                  "Content creator",
                ]}
              />
            </span>
          </p>
        </div>
        <Container
          className=" buttons container-fluid d-flex justify-content-center"
          style={{
            width: "320px",
            position: "relative",
            left: "-25px",
            top: "30px",
          }}
        >
          <Row>
            <Col>
              <Button as={Link} to="/mywork" variant="outline-light">
                My Work
              </Button>
            </Col>
            <Col>
              <Button as={Link} to="/contact" variant="outline-warning">
                Contact
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
