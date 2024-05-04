import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Projects from './components/project/Projects';
import Loader from './components/loader-spiner/Loader';
import { AuthContext } from './context/AuthContext';
import Admin from './pages/admin/Admin';

function Routers() {
    const { setIsLoading } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setIsLoading(false);
        }, 1000); // Timeout for 10 seconds

        return () => clearTimeout(timer);
    }, [setIsLoading]);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<App />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/project' element={<Projects />} />
                            <Route path='/admin' element={<Admin />} />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
            )}
        </div>
    );
}

export default Routers;
