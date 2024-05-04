import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejsSmall } from "react-icons/di";
import { SiFirebase, SiBootstrap, SiTailwindcss, SiAntdesign } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import figma from "../../image/Без названия-PicPicAI-removed.png"
function Techstack() {
  return (<div className="w-full">
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="flex mt-[30px] w-full teachsctackrow">
      <Col xs={4} md={2} className="tech-icons">
        <ImHtmlFive className="html-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt className="css-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap className="bootstrap-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss className="tailwind-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="javascript-icon" />
      </Col>
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="flex mt-[-20px] teachsctackrow">
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="react-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase className="firebase-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={figma} alt="" className="node-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejsSmall className="node-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAntdesign className="text-[#61AEE1]" />
      </Col>
    </Row>
  </div>
  );
}

export default Techstack;
