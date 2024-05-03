import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Projects from './components/project/Projects'

function Routers() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/project' element={<Projects />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Routers