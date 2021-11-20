import React from "react";
import { Accordion, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import styled from "styled-components";
import Buttons from "../components/Buttons";
import profilePic from "../img/about-img.png";
import { RiYoutubeLine } from "react-icons/ri";
import { SiYoutubestudio } from "react-icons/si";

const SkillsStyle = styled.div`
  .skills {
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-direction: column;
  }

  .skill-content {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    // justify-content: center;
    align-items: center;
  }
  .skill-content span {
    padding: 0 10px 0 10px;
    margin: 5px;
    border: 2px solid var(--primary-red);
    border-radius: 20px;
    font-size: 20px;
    color: var(--primary-dark);
    transition: width 0.5s ease;
  }
`;

function About() {
  return (
    <div>
      <Helmet>
        <title>Ayush | About</title>
      </Helmet>
      <Container fluid className="mt-5 about-section">
        <Row xs={1} md={2} className="g-2">
          <Col>
            <h1 className="about-h1">About me {"-->"}</h1>
            <Container fluid className="accr mt-5">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <strong>Skills</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <SkillsStyle className="skills">
                      <div className="skill-bar"></div>
                      <div className="skill-content">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                        <span>React.js</span>
                        <span>Bootstrap</span>
                        <span>Adobe Premiere Pro</span>
                        <span>Adobe Photoshop</span>
                        <span>Adobe After Effects</span>
                      </div>
                    </SkillsStyle>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <strong>Education</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h4>Metric {"-->"} </h4>
                    <span
                      style={{
                        display: "block",
                        color: "gray",
                        fontWeight: "500",
                      }}
                    >
                      2017
                    </span>
                    <span style={{ fontSize: "15px", opacity: "0.8" }}>
                      Govt. Model sen. sec. high school,{"["}
                      <Typewriter
                        loop
                        cursor
                        cursorStyle="]"
                        typeSpeed={50}
                        deleteSpeed={70}
                        delaySpeed={1500}
                        words={["Ludhiana", "Model Town", "Punjab"]}
                      />
                    </span>
                    <p>
                      I completed my matriculation in Government school in year
                      2017
                    </p>
                    <hr />
                    <h4>Under Graduation {"==>"}</h4>
                    <span
                      style={{
                        display: "block",
                        color: "gray",
                        fontWeight: "500",
                      }}
                    >
                      2017-2019
                    </span>
                    <span style={{ fontSize: "15px", opacity: "0.8" }}>
                      Govt. Model sen. sec. high school,{"["}
                      <Typewriter
                        loop
                        cursor
                        cursorStyle="]"
                        typeSpeed={50}
                        deleteSpeed={70}
                        delaySpeed={1500}
                        words={["Ludhiana", "Model Town", "Punjab"]}
                      />
                    </span>
                    <p>
                      I completed my Under Graduation in Government school in
                      year 2019
                    </p>
                    <hr />
                    <h4>Computer Science {"&"} Engineering :==</h4>
                    <span
                      style={{
                        display: "block",
                        color: "gray",
                        fontWeight: "500",
                      }}
                    >
                      2019-2023{" "}
                      <span style={{ color: "var(--primary-red)" }}>
                        Pursuing
                      </span>
                    </span>
                    <span style={{ fontSize: "15px", opacity: "0.8" }}>
                      Gulzar Group of Institution,{"["}
                      <Typewriter
                        loop
                        cursor
                        cursorStyle="]"
                        typeSpeed={50}
                        deleteSpeed={70}
                        delaySpeed={1500}
                        words={["Khanna", "GT-Road", "Punjab"]}
                      />
                    </span>
                    <p>
                      I'm Pursuing B.Tech Computer Science &amp; Engineering.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                {/* ------------------Experience started----------------- */}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <strong>Experience</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h4>
                      Video Editing{" "}
                      <SiYoutubestudio
                        size="25px"
                        color="var(--primary-orange)"
                      />
                    </h4>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "500",
                      }}
                    >
                      2018&nbsp;
                      <span
                        style={{
                          color: "var(--primary-red)",
                          fontWeight: "500",
                        }}
                      >
                        /
                        <Typewriter
                          loop
                          cursor
                          cursorStyle="/"
                          typeSpeed={50}
                          deleteSpeed={70}
                          delaySpeed={1500}
                          words={["Continues", "जारी है"]}
                        />
                      </span>
                      <a
                        rel="noreferrer"
                        style={{
                          display: "block",
                          // textDecoration: "none",
                          color: "var(--primary-orange)",
                          fontSize: "15px",
                        }}
                        href="https://youtube.com/c/AVAVines"
                        target="_blank"
                      >
                        A.V.A Vines
                      </a>
                    </span>
                    <p>
                      I worked as a Video Editor, Director and Photographer on
                      this channel
                    </p>
                    <hr />
                    {/* ----------------Unlisted Boyz---------------- */}
                    <h4>
                      Content Creator&nbsp;
                      <RiYoutubeLine color="var(--primary-red)" size="30px" />
                    </h4>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "500",
                      }}
                    >
                      2021&nbsp;
                      <span
                        style={{
                          color: "var(--primary-red)",
                          fontWeight: "500",
                        }}
                      >
                        /
                        <Typewriter
                          loop
                          cursor
                          cursorStyle="/"
                          typeSpeed={50}
                          deleteSpeed={70}
                          delaySpeed={1500}
                          words={["Continues", "जारी है"]}
                        />
                      </span>
                      <a
                        rel="noreferrer"
                        style={{
                          display: "block",
                          // textDecoration: "none",
                          color: "var(--primary-orange)",
                          fontSize: "15px",
                        }}
                        href="https://www.youtube.com/channel/UC6alzlONkR63GTV2so20I7w"
                        target="_blank"
                      >
                        Unlisted Boyz
                      </a>
                    </span>
                    <p>
                      I worked as a Content Creator, Video Editor and Director.
                    </p>
                    <hr />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Container className="abt-btn">
                <Buttons mywork="My Work" contact="Contact" />
              </Container>
            </Container>
          </Col>
          <Col>
            <Container fluid>
              <div className="img-box">
                <Image src={profilePic} alt="profile pic" />
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
