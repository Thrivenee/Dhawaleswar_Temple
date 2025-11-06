import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

import DonationArchive from "./components/Donation/DonationArchive/DonationArchive";
import DonationForm from "./components/Donation/DonationForm/DonationForm";
import Sloka from "./components/Sloka/Sloka";

function App() {
  return (
     <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<DonationArchive/>} />
         <Route path="/donationform" element={<DonationForm/>} />
         <Route path="/sloka" element={<Sloka/>} />
    
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

