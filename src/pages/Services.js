import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import CardsMenu from "../components/CardMenu";
// import UnderCons from "../components/UnderCons";

function Services() {
  return (
    <div>
      <Helmet>
        <title>Ayush | Services</title>
      </Helmet>
      {/* <UnderCons/> */}

      <Container fluid>
        <Container className="mt-4 services">
          <h1>Services</h1>
          <p className="service-para">
            This is the service section, I'll provide you those given services
            gicen below.
          </p>
        </Container>

        <Container>
          <CardsMenu />
        </Container>
      </Container>
    </div>
  );
}

export default Services;
