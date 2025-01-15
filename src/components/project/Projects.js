import React, { useEffect, useState } from "react";
import { CgEnter } from "react-icons/cg";
import { FaArrowAltCircleDown } from "react-icons/fa";
import "./Projects.css";
import axios from "../../api/Api";
import { RotatingLines } from "react-loader-spinner";

function Projects() {
    const [news, setNews] = useState([]);
    const [loaderspin, setLoaderSpin] = useState(true); // Initialize loaderspin as true
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/project/get");
                setNews(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoaderSpin(false); // Set loaderspin to false when data is fetched
            }
        };
        fetchData();
    }, []);

    const cardInfo = [
        {
            image: news.image,
            route: news.projectlink,
        }
    ];

    const [projectCard, setProjectCard] = useState(true);

    function scrollHandler() {
        if (window.scrollY <= 70) {
            setProjectCard(true);
        } else {
            setProjectCard(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []); // Add an empty dependency array to ensure the event listener is added only once

    return (
        <div className="Project">
            <div className="project__section">
                <div className={projectCard ? "project__text" : "project__text Scroll"} style={{ backgroundColor: "#0F0F0F", color: "white" }}>
                    <h2 className="project-heading">
                        My Recent <strong className="purple">Works </strong>
                    </h2>
                    <p>Here are a few projects I've worked on recently.</p>
                    <p>
                        I have nearly 2 years of experience with React.js. I believe in the
                        strong dedication in each project of my clients. Besides, I can help
                        you with: <br /> 1. HTML5 and Css <br /> 2. Vanilla JavaScript
                        projects <br /> 3. React JS and Node.js projects <br /> 4.Tailwinds
                        and bootstrap <br /> 5.Node.js and MongoDB database || firebase
                    </p>

                    <div className="resume__links">
                        <h3>Here is my resume</h3>
                        <FaArrowAltCircleDown />
                        <a
                            href="https://drive.google.com/file/d/1MlkTdJCxkgeIDADDStva_UBz04E4H8Gn/view?usp=drive_link"
                            className="resume__btn"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="project__cardSection">
                    {loaderspin ? (
                        <div className="loaderspin w-[full] h-[100vh] flex items-center justify-center">
                            <RotatingLines
                                visible={true}
                                height={96}
                                width={96}
                                strokeColor="white"
                                speedMultiplier={0.75}
                                ariaLabel="rotating-lines-loading"
                            />
                        </div>
                    ) : (
                        news.map((card, index) => (
                            <div key={index} className="project__card">
                                <img alt="" variant="top" className="card__image" src={card.image} />
                                <div className="project__IconsContainer">
                                    <div className="project__techIcons">
                                        <h5>Enter This Webpage</h5>
                                        <a href={card.projectlink} target="_blank" rel="noreferrer">
                                            <CgEnter />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Projects;
