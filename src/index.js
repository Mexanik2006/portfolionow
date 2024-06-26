import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routers from './Routers';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Routers />
    </AuthContextProvider>
  </React.StrictMode>
);

