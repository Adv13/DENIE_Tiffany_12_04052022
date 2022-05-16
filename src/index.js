import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Error from './Components/Error/error'
import Dashboard from './Pages/Dashboard/dashboard'
import Home from './Pages/Home/home'
import Settings from './Pages/Settings/settings'
import Community from './Pages/Community/community';

/*"/dashboard/:id" */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/settings" element={<Settings />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
