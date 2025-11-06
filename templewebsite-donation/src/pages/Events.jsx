import React from "react";
import "./Event.css";
import diwali from "../assest/image102.png";
import shibaratri from "../assest/image105.png";
import rathyatra from "../assest/image103.png";

function Events() {
  const events = [
    {
      type: "Festival",
      image: diwali,
      title: "Diwali Festival",
      date: "October 20, 2025",
      description:
        "Celebrate the festival of lights with prayers, decorations, and community feasts."
    },
    {
      type: "Celebration",
      image: shibaratri,
      title: "Mahashivratri Celebration",
      date: "March 8, 2026",
      description:
        "Join us for night-long prayers, rituals, and cultural programs celebrating Lord Shiva."
    },
    {
      type: "Procession",
      image: rathyatra,
      title: "Rath Yatra",
      date: "July 12, 2026",
      description:
        "Experience the grand chariot procession of Lord Jagannath with devotion and joy."
    }
  ];

  return (
    <div className="page">
      {/* Hero section remains unchanged */}
      <section className="hero about-hero">
        <div className="hero-content">
          <h1>Temple Events & Festivals</h1>
          <p>A journey of faith, culture and celebration at Dhabaleshwar Temple. </p>
        </div>
      </section>

      {/* Events section with background image */}
      <div className="events-section">
        <h1 className="headerevent">Events</h1>
        <p>
          At Dhabaleswar Temple, we celebrate traditions with devotion and joy. 
          Every festival and procession is an opportunity to connect with the divine, 
          strengthen community bonds, and experience spiritual bliss. 
          Join us in our sacred celebrations filled with rituals, music, and cultural performances.
        </p>

        {/* Events List */}
        <div className="events-list">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <h2>{event.title}</h2>
              <p className="date"><strong>Date:</strong> {event.date}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
