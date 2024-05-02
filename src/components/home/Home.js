import React from 'react'
import "./Home.css"
import Typewriter from "typewriter-effect";
import Home2 from './Home2';
function Home() {
    return (
        <div className='Home pl-[150px]'>
            <div className="">
                <div className="home_title pt-[140px]">
                    <h1 className='text-[#06285E] text-[2.4em]  font-medium mb-4'>Hi There!</h1>
                </div>

                <div className="home_titlt text-[2.4em]">
                    <div className="">
                        <span className='text-[#06285E]'>Welcome,</span> <span className='text-[white]'>My Portfolio 👋🏻,</span>
                    </div>
                    <div className="">
                        <span className='text-[#06285E]'>I'm</span> <span className='text-[white]'>Axmadullayev Sadriddin,</span>
                    </div>
                </div>
                <div className="text-[2em] text-[white] font-bold pt-[20px]">
                    <Typewriter
                        options={{
                            strings: [
                                "Web Developer",
                                "JavaScript Developer",
                                "React JS developer",
                                "Node JS developer",
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </div>

                <div className="">
                    <a
                        href="https://t.me/axmadullayev2006"
                        target="_blank"
                        className="home__mainBtn"
                        rel="noreferrer"
                    >
                        Contact Me By Telegram
                    </a>
                </div>
                {/* <div className="home_name">
                    <h1 className='text-[white] text-[60px]  font-medium'><span className='text-[red] font-bold'>Sadriddin</span> Ahmadullayev</h1>
                </div> */}

                <div className="mt-[30vh]">
                    <Home2 />
                </div>
            </div>
        </div>
    )
}

export default Home