import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import { AuthContext } from './context/AuthContext';
import Loader from './components/loader-spiner/Loader';

function App() {
  const { isLoading, setIsLoading } = useContext(AuthContext); // Destructure directly without setting state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [setIsLoading]); // Include setIsLoading in the dependency array

  return (
    <div className="App">
      {isLoading ? (
        <div className="">
          <Loader />
        </div> // Add a class name for styling
      ) : (
        <div className="content">
            <Home />
        </div>
      )}
    </div>
  );
}

export default App;
