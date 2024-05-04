import React from "react";
import { ImPointRight } from "react-icons/im";
import "./AboutMedia.css"

function AboutCard() {
    return (
        <div className="quoteCard__view text-[1.5rem]">
            <blockquote className="blockquote mb-100">
                <p style={{ textAlign: "justify" }}>
                    Hi Everyone, I am{" "}
                    <span className="purple text-[#07234F] font-bold italic">Axmadullayev Sadriddin </span>
                    from <span className="purple"> Namangan, UZBEKISTAN</span>
                    <br />I am Web Developer
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                </p>
                <ul className="ml-[50px] mt-[20px] mb-[20px]">
                    <li className="about-activity flex items-center">
                        <ImPointRight className="mr-[12px] " /> Creating web sites
                    </li>
                    <li className="about-activity flex items-center">
                        <ImPointRight className="mr-[12px] " /> Learning other programms
                    </li>
                    <li className="about-activity flex items-center">
                        <ImPointRight className="mr-[12px] " /> Coding
                    </li>
                </ul>

                <p>"Strive to build things that make a difference!" </p>
            </blockquote>
        </div>
    );
}

export default AboutCard;
