import React, { useState } from "react";
import "./About.css";
import image from "../assest/image104.png";
import higimage from "../assest/image2.jpg";

// ✅ Import images for specialties
import suspensionImg from "../assest/image201.png";
import spiritualImg from "../assest/image202.png";
import heritageImg from "../assest/image203.png";

function About() {
  const [activeTab, setActiveTab] = useState("Suspension Bridge");

  // ✅ Specialties object with both text & image
  const specialties = {
    "Suspension Bridge": {
      text: "The famous Suspension Bridge at Dhabaleswar Temple stretches over the Mahanadi River, offering a unique and scenic path to the temple. With its gentle sway and stunning views of the river and island, the bridge is both an engineering marvel and a memorable spiritual journey for every visitor.",
      image: suspensionImg,
    },
    Spiritual: {
      text: "Dhabaleswar Mandir holds immense spiritual significance, attracting countless Lord Shiva devotees, especially during major festivals. It’s a place of deep reverence, offering solace and spiritual fulfillment to its visitors.",
      image: spiritualImg,
    },
    Heritage: {
      text: "The temple reflects Odia culture and heritage, with intricate stone carvings, festivals, and rituals that have been preserved for centuries. It also serves as a living center of spirituality and community life, where traditional music, dance, and crafts continue to thrive alongside daily worship, making it not just a monument but a vibrant symbol of Odisha’s timeless identity.",
      image: heritageImg,
    },
  };

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero about-hero">
        <div className="hero-content">
          <h1>About Dhabaleswar Temple</h1>
          <p>Where tradition meets devotion, offering peace and blessings to all.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-card-section">
        <div className="about-card">
          <img src={image} alt="Dhabaleswar Temple" className="about-card-img" />
          <div className="about-card-text">
            <h3 className="about-subtitle">ॐ A Sacred Abode of Lord Shiva</h3>
            <h2 className="about-title">About Dhabaleswar Temple</h2>
            <p>
              Located in the vibrant heart of Gurujanga, Dhabaleswar Temple is a cherished
              culinary haven where tradition meets innovation. Known for its commitment to
              quality ingredients, delightful flavors, and exceptional service, Dhabaleswar
              Temple invites you to savor a dining experience like no other.
            </p>
            <p>
              <strong>Architectural Marvel:</strong> Exquisite Odia architecture amidst
              serene natural surroundings.
            </p>
            <p>
              <strong>Festive Vibrance:</strong> Celebrated during Mahashivaratri with
              devotion and rituals.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="highlights-card-section">
        <div className="highlights-card">
          <img src={higimage} alt="Dhabaleswar Temple" className="highlights-card-img" />
          <div className="highlights-card-text">
            <h2 className="highlights-title">ॐ Key Highlights of Dhabaleswar Temple</h2>
            <p>
              For those who appreciate quality food, a warm atmosphere, and attentive
              service, Dhabaleswar Temple in Gurujanga, Khurda is a must-visit destination.
              With its extensive menu, accessible location, and dedication to customer
              satisfaction, Dhabaleswar Temple promises an unforgettable dining experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Specialties Section */}
      <section className="specialties-card-section">
        <div className="specialties-card">
          <h2 className="specialties-title">ॐ Our Specialties ॐ</h2>
          <div className="specialties-tabs">
            {Object.keys(specialties).map((tab) => (
              <button
                key={tab}
                className={`specialty-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="specialties-content">
            {/* ✅ Image + Text */}
            <img
              src={specialties[activeTab].image}
              alt={activeTab}
              className="specialties-img"
            />
            <p>{specialties[activeTab].text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
