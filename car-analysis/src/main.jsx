import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import { CssBaseline } from '@mui/material';
import { HashRouter as Router } from 'react-router-dom'; // Use HashRouter here instead of BrowserRouter

import './index.css'; // Assuming you have a global CSS file

// Get the root element
const rootElement = document.getElementById('root');

// Create a root using React 18's createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <Router>  {/* Wrap your app with HashRouter instead of BrowserRouter */}
      <CssBaseline /> {/* This resets CSS and provides Material-UI's global styles */}
      <App />
    </Router>
  </React.StrictMode>
);
