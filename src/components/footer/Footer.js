import React from "react";
import { Container, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import "./Footer.css";
function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <div className="footer__conatiner">
                <Col md="4" className="footer-des">
                    <h3>Designed and Developed by Axmadullayev</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>CopyRight © {year}</h3>
                </Col>
                <Col className="footer-body">
                    {
                        <ul className="footer-icons">
                            <li>
                                <a
                                    href="https://github.com/Mexanik2006"
                                    style={{ color: "white" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/axmadullayev2006"
                                    style={{ color: "white" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {" "}
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://t.me/axmadullayev2006"
                                    style={{ color: "white" }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTelegramPlane />
                                </a>
                            </li>
                        </ul>
                    }
                </Col>
            </div>
        </Container>
    );
}

export default Footer;