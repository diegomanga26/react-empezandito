import React from 'react'
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Registrico from './registro.jsx';
import Logincito from './login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Registrico/>
    <Logincito/>
  </React.StrictMode>,
)
