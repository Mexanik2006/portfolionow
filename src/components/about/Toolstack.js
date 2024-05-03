import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiVisualstudiocode, SiGithub } from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="flex tools_about">
            <Col xs={4} md={2} className="tech-icons m-[15px] p-[25px]">
                <SiGithub className="github-icon" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux className="linux-icon" />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode className="visual-icon" />
            </Col>
        </Row>
    );
}

export default Toolstack;
