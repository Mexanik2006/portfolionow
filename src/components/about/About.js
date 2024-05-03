import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import "./About.css";
import Aboutcard from "./AboutCard";
import laptopImg from "../../image/about.png";
import Toolstack from "./Toolstack";

function About() {
    return (
        <div className="About">
            <div className="about__section">
                <Container>
                    <Row
                        className="about__row text-[white] font-medium flex items-center "
                        style={{ justifyContent: "center", padding: "10px" }}
                    >
                        <Col
                            md={7}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "50px",
                            }}
                        >
                            <h1 style={{ fontSize: "2.8em", paddingBottom: "20px", color: "#06285E" }}>
                                Know Who <strong className="purple">I'm</strong>
                            </h1>
                            <Aboutcard />
                        </Col>
                        <Col
                            md={5}
                            style={{ paddingTop: "120px", paddingBottom: "50px" }}
                            className="about__img"
                        >
                            <img src={laptopImg} alt="about" className="img-fluid w-[700px]" />
                        </Col>
                    </Row>
                    <h1 className="project-heading text-[white] text-[40px] font-medium">
                        Professional <strong className="purple text-[#07234F]">Skillset </strong>{" "}
                        <h3 style={{ marginLeft: "20px" }} className="text-[25px]">Which I Used In My Projects</h3>
                    </h1>
                    <Techstack />
                    <h1 className="project-heading text-[white] text-[40px] font-medium mt-[50px]">
                        <strong className="purple text-[#07234F]">Tools</strong> I use
                    </h1>
                    <Toolstack />
                </Container>
            </div></div>
    );
}

export default About;
