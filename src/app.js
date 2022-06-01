import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import Error from './Components/Error/error'
import Dashboard from './Pages/Dashboard/dashboard'
import Home from './Pages/Home/home'
import Community from './Pages/Community/community';

function App(){
return(
  <Router>
    <section className="navigation">
      <Header />
      <Footer />
    </section>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/:id" element={<Dashboard />} /> 
      <Route path="/community" element={<Community />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>)
}

export default App;
