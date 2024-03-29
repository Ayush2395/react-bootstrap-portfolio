import React, { useRef, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import background from "../img/contact.png";
import ParticlesBackground from "../components/ParticlesBackground";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import emailjs from "emailjs-com";

function Contact() {
  const [hide, setHide] = useState(false);

  const form = useRef();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    subject: "",
    email: "",
    message: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const { firstname, lastname, subject, email, message } = values;
    emailjs
      .sendForm(
        "service_8fzrrej",
        "template_ktig2pb",
        form.current,
        "user_31ihaw20tcA128utlZoYq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const send = await fetch(
      "https://bootstrap-portfolio-15c73-default-rtdb.firebaseio.com/userMessage.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, subject, email, message }),
      }
    );

    setValues({
      firstname: "",
      lastname: "",
      subject: "",
      email: "",
      message: "",
    });

    if (send) {
      alert("Message was sent");
    } else {
      alert("Fill form correctly");
    }
  };
  return (
    <div className="contact-section">
      <Helmet>
        <title>Ayush | Contact</title>
      </Helmet>
      <div className="particles">
        <ParticlesBackground />
      </div>
      <Container fluid="xxl">
        <Row>
          <Col>
            <Container className="mt-5">
              <Form ref={form} onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstname"
                    required
                    onChange={(e) =>
                      setValues({ ...values, firstname: e.target.value })
                    }
                    value={values.firstname}
                    type="text"
                    placeholder="Enter first name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    name="lastname"
                    required
                    onChange={(e) =>
                      setValues({ ...values, lastname: e.target.value })
                    }
                    value={values.lastname}
                    type="text"
                    placeholder="Enter last name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    name="subject"
                    required
                    onChange={(e) =>
                      setValues({ ...values, subject: e.target.value })
                    }
                    value={values.subject}
                    type="text"
                    placeholder="Enter your subject"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    required
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                    value={values.email}
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    name="message"
                    required
                    onChange={(e) =>
                      setValues({ ...values, message: e.target.value })
                    }
                    value={values.message}
                    as="textarea"
                    className="textarea"
                    placeholder="Your Message"
                  />
                </Form.Group>

                <Button variant="outline-warning" type="submit">
                  Send Message <BiMessageSquareDetail />
                </Button>
              </Form>
            </Container>
          </Col>
          <Col>
            <img
              className="contact-bg ms-5 mt-5"
              src={background}
              alt="background"
            />
          </Col>
        </Row>
        <Row className="mt-0 social-group" md={1}>
          <Col>
            <div className="social-media-btn">
              <Button variant="outline-primary" onClick={() => setHide(!hide)}>
                Follow
              </Button>
            </div>
          </Col>
          <Col>
            {hide ? (
              <div className="social-media">
                <a
                  rel="noopener"
                  href="https://www.facebook.com/ayush.chopra.549668"
                >
                  <BsFacebook size="25px" />
                </a>
                <a
                  rel="noopener"
                  href="https://www.instagram.com/official_mandal_saab/"
                >
                  <BsInstagram size="25px" color="var(--primary-red)" />
                </a>
                <a rel="noopener" href="https://github.com/Ayush2395">
                  <BsGithub size="25px" color="var(--primary-dark)" />
                </a>
                <a rel="noopener" href="https://twitter.com/Mandal_SaaB03">
                  <BsTwitter size="25px" color="var(--primary-blue)" />
                </a>
              </div>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
