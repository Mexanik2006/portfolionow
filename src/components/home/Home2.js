import React from "react";
import "./Home2.css"
import myImg from "../../image/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Home2() {
    return (<div className="Home2 pb-[100px]">
        <div className="home-about-section bg-blue-900" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center home2__container">
                    <div className="lg:w-2/3">
                        <h1 className="text-3xl lg:text-5xl text-white font-bold mb-4">
                            LET ME <span className="text-purple-600"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="text-white">
                            I fell in love with coding and respect other coders <br />I am Fluent Javascript and React
                            <span className="italic">
                                <span className="text-purple-600"> CSS, Javascript and React. </span>
                            </span>
                            <br />
                            My field of Interest's are building new &nbsp;
                            <span className="italic">
                                <span className="text-purple-600">Web Technologies and Products </span>
                                and also in areas related to{" "}
                                <span className="text-purple-600">
                                    Deep Learning and Natural Launguage Processing.
                                </span>
                            </span>
                            <br />
                            Whenever possible, I also apply my passion for developing products with{" "}
                            <span className="text-purple-600">Node.js</span> and
                            <span className="italic">
                                <span className="text-purple-600">
                                    {" "}
                                    Modern Javascript and React.js Library and Frameworks
                                </span>
                            </span>
                            &nbsp; like
                            <span className="italic">
                                <span className="text-purple-600"> Next.js</span>
                            </span>
                        </p>
                    </div>
                    <div className="lg:w-1/3">
                        <div className="myAvtar">
                            <Tilt>
                                <img src={myImg} className="img__fluid" alt="avatar" />
                            </Tilt>
                        </div>
                    </div>
                </div>
                <div className="text-white text-center">
                    <h1>FIND ME ON</h1>
                    <p>Feel free to <span className="text-purple-600">connect </span>with me</p>
                    <ul className="home-about-social-links flex justify-center mt-4">
                        <li className="social-icons mx-4">
                            <a
                                href="https://github.com/Mexanik2006"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white"
                            >
                                <AiFillGithub className="w-6 h-6" />
                            </a>
                        </li>

                        <li className="social-icons mx-4">
                            <a
                                href="https://www.instagram.com/axmadullayev2006"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white"
                            >
                                {/* <FaLinkedinIn className="w-6 h-6" /> */}
                                <FaInstagram className="w-6 h-6 text-[grey]" />
                            </a>
                        </li>
                        <li className="social-icons mx-4">
                            <a
                                href="https://t.me/axmadullayev2006"
                                target="_blank"
                                rel="noreferrer"
                                className="text-white"
                            >
                                <FaTelegramPlane className="w-6 h-6" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div></div>
    );
}

export default Home2;
