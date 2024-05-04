import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiLinux, SiVisualstudiocode, SiGithub, SiRender } from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="flex tools_about">
            <Col xs={4} md={2} className="tech-icons m-[15px] p-[25px]">
                <SiGithub className="github-icon" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaWindows className="text-[#0074CD]" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode className="visual-icon" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <IoLogoVercel className="text-[black]" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRender className="text-[black]" />
            </Col>
        </Row>
    );
}

export default Toolstack;
