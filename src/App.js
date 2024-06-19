import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './Pages/About';
import Services from './Pages/Services';
import WhyUs from './Pages/WhyUs';
import Contact from './Pages/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Termofservice from './Pages/Termofservice';
// import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      {/* <ToastContainer></ToastContainer> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/our-services" element={<Services />}></Route>
          <Route path="/why-us" element={<WhyUs />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/Term-of-service" element={<Termofservice />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
