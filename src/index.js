import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Assurez-vous que le chemin d'accès à App est correct
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
