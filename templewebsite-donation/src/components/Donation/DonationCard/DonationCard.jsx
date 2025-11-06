import React from "react";
import { useNavigate } from "react-router-dom";


export default function DonationCard({ image, title, description, raised, goal }) {
  const navigate = useNavigate();

  return (
    <div className="donation-archive-card">
    
      <img src={image} alt={title} className="donation-archive-image" />
      <h3 className="donation-archive-title">{title}</h3>
      <p className="donation-archive-description">{description}</p>
      <p className="donation-archive-stats">
        <span className="donation-archive-raised">Raised: Rs{raised.toLocaleString()}</span>
        <span className="donation-archive-goal">Goal: Rs{goal.toLocaleString()}</span>
      </p>
      <div className="donation-archive-progress-bar">
        <div
          className="donation-archive-progress"
          style={{ width: `${(raised / goal) * 100}%` }}
        ></div>
      </div>
    <button
  className="donation-archive-btn"
  onClick={() => {
    navigate("/donationform");
    window.scrollTo(0, 0); 
  }}
>
  DONATE
</button>

    </div>
  );
}
