// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Importe seu CSS aqui
import { AuthProvider } from './hooks/useAuth'; // Importe o AuthProvider
import { BrowserRouter as Router } from 'react-router-dom'; // Importe o Router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> 
      <AuthProvider> 
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
);