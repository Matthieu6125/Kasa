import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './composants/Footer';
import Error from './composants/Error';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Header from './composants/Header';
import FicheLogement from './pages/FicheLogement';
import Apropos from './pages/Apropos';
import './utils/GlobalStyle/_globals.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Header /> 
            <Routes>          
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error />} />  
              <Route path="/pages/FicheLogement/:id" element={<FicheLogement />}  /> 
              <Route path="/pages/Apropos" element={<Apropos />}    />
            </Routes>
        <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
