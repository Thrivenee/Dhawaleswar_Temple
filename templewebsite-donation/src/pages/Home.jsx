import React, { useState } from "react";
import image from '../assest/image.jpg';
import { GiPrayer } from "react-icons/gi";
import { FaPrayingHands } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import templeInside from '../assest/templeInside.jpg'
import flowerPattern from '../assest/flower-pattern.svg';
import Services from "./Services/Services";
import Ourfestival from "./Ourfestival/Ourfestival";
/*import DonationSection from "../components/DonationSection";*/
import HomeGallery from "../components/HomeGallery/HomeGallery";

function Home() {
    const [filter, setFilter] = useState("All");
     const [selectedFestival, setSelectedFestival] = useState(null);
      const [showDonation, setShowDonation] = useState(false); // Donation Modal State
  
  return (
    <div >
      {/* Hero  Section*/}
      <section className="hero">
         <div className="hero-content">
        <h1> Welcome to Dhabaleshwar Temple </h1>
        <p>A Sacred Island of Lord Shiva, Where Faith Meets Serenity</p>
        <p>Experience spirituality, devotion, and culture.</p>
        <div className="hero-buttons">
        <a href="/about" className="hero-btn">Learn More</a>
            </div>
        </div>
      </section>
      {/* Donation Modal */}
      {showDonation && (
        <div className="modal" onClick={() => setShowDonation(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setShowDonation(false)}>
              &times;
            </span>
            <h2>Support Our Temple 🙏</h2>
            <p>Your generous donation helps us serve the community and maintain temple activities.</p>

            <form className="donation-form">
              <label>Full Name:</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Donation Amount (₹):</label>
              <input type="number" placeholder="Enter amount" required />

              <button type="submit" className="donate-submit-btn">Proceed to Donate</button>
            </form>
          </div>
        </div>
      )}

      {/* Intro Section */}
<section className="intro-card-section">
  <div className="intro-card">
    <img
      src={image}
      alt="Dhabaleswar Temple"
      className="intro-card-img"
    />
    <div className="intro-card-text">
      <h3 className="intro-subtitle">ॐ A Divine Retreat on Mahanadi's Island</h3>
      <h2 className="intro-title">Dhabaleswar Temple in Gurujanga, Khurda</h2>
      <p>
        Located in the vibrant heart of <strong>Gurujanga</strong>, 
        <strong> Dhabaleswar Temple</strong> is a cherished spiritual 
        haven where tradition meets devotion. Known for its commitment 
        to cultural values, divine blessings, and community service, 
        <strong> Dhabaleswar Temple</strong> invites you to experience 
        spirituality like no other. The temple is designed to provide 
        a serene yet powerful ambiance, where every visit feels special 
        and divine.
      </p>
    </div>
  </div>
</section>

   <Services/>   

{/* Operating Hours Section as a Card */}

<section className="hours-section">
  <div className="hours-container">
    <div className="hours-left">
      <img
        src={templeInside}
        alt="Dhabaleswar Temple"
        className="hours-image"
      />
    </div>

    <div className="hours-right">
      <h2>ॐ Operating Hours ॐ</h2>
      <p>
        A Sacred Journey of Prayer and Worship at <strong className="templedhabal">Dhabaleswar Temple</strong>.
        Experience Divine Peace and Blessings. Whether it’s an early morning prayer or
        evening worship, our temple is ready to serve you with divine blessings at every moment.
      </p>

      <div className="hours-cards">
        <div className="hours-subcard">
          <h3>Temple Timings</h3>
          <ul>
            <li>Morning Opening: 5:00 am</li>
            <li>Afternoon Closing: 2:00 pm</li>
            <li>Evening Opening: 5:00 pm</li>
            <li>Evening Closing: 9:00 pm</li>
          </ul>
        </div>

        <div className="hours-subcard">
          <h3>Puja Schedule</h3>
          <ul>
            <li>Morning Arti: 5:00 am – 5:30 am</li>
            <li>Afternoon Puja: 12:30 pm – 1:00 pm</li>
            <li>Evening Arti: 6:00 pm – 6:30 pm</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


 {/* Festivals Section with Buttons */}
<Ourfestival/>
{/* Gallery Section */}
      <HomeGallery />
{/* Stay Informed Section */}
<section className="stay-informed-section">
   <h3>ॐ STAY INFORMED AND INSPIRED ॐ</h3>
  <h2>Connect with Us</h2>

  <div className="stay-informed-card">
    
    {/* Contact Part */}
    <div className="stay-center">
      <img
         src="https://cdn-icons-png.flaticon.com/512/597/597177.png" // phone/email icon
              alt="Contact Icon"
        style={{ width: "60px", marginBottom: "10px" }}
      />
      <div className="stay-text">
        <p>For Assistance, Reach Out to Our HELPLINE!</p>
        <h4>Phone: +91 9337287145</h4>
        <h4 className="infoemail">Email: <a href="mailto:chaitanyarana4@gmail.com" className="textemail">chaitanyarana4@gmail.com</a></h4>
      </div>
    </div>



    {/* Address Part */}
    <div className="stay-center">
      <img
         src="https://cdn-icons-png.flaticon.com/512/684/684908.png" // location icon
              alt="Address Icon"
        style={{ width: "60px", marginBottom: "10px" }}
      />
      <div className="stay-text">
        <p>Visit Us at:</p>
        <h4>Dhabaleswar Temple</h4>
        <h4>Gurujanga, Khurda, Odisha, India, 752055</h4>
      </div>
    </div>

  </div>
</section>

    </div>
  );
}
export default Home;

