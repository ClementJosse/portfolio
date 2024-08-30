import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Ajoutez ce lien pour importer la police Montserrat depuis Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
