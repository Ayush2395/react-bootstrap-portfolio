import React from "react";
import { Container, Image } from "react-bootstrap";
import { BsGear } from "react-icons/bs";

function UnderCons({ pageTitle }) {
  return (
    <div>
      <Container fluid className="d-flex justify-content-center">
        <div>
          <Image
            className="under_construction"
            src="https://image.freepik.com/free-vector/coming-soon-design_1132-70.jpg"
            alt="under construction"
          />
          <BsGear color="var(--primary-red)" className="gear" size="50px" />
          <BsGear
            color="var(--primary-yellow)"
            className="gear-y"
            size="80px"
          />
        </div>
      </Container>
    </div>
  );
}

export default UnderCons;
