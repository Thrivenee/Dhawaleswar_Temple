import React from "react";
import DonationCard from "../DonationCard/DonationCard";
import "./DonationArchive.css";
import Navbar from "../../Navbar";
import templeBanner from "../../../assest/templeee.jpg"; 
import flowerPattern from "../../../assest/flower-pattern.svg";
import imgpuja1 from "../../../assest/bright.jpg";
import imgpuja2 from "../../../assest/donote.jpg";
import imgpuja3 from "../../../assest/feed.jpg";
import imgpuja4 from "../../../assest/empower.jpg";
import imgpuja5 from "../../../assest/donoteschool.jpg";
const donations = [
  {
    image:imgpuja1,
    title: "Protecting Children",
    description: "Temple is place where hindu worship consectetur adipisicing elit, sed do",
    raised: 52384,
    goal: 85000,
  },
  {
    image: imgpuja2,
    title: "Donate NGOs",
    description: "Temple is place where hindu worship consectetur adipisicing elit, sed do",
    raised: 49444,
    goal: 78000,
  },
  {
    image: imgpuja3,
    title: "Feed Poors",
    description: "Temple is place where hindu worship consectetur adipisicing elit, sed do",
    raised: 78334,
    goal: 96400,
  },
  {
    image: imgpuja4,
    title: "Empower Young People",
    description: "Temple is place where hindu worship consectetur adipisicing elit, sed do",
    raised: 35984,
    goal: 75000,
  },
 
];

export default function DonationArchive() {
  return (
    <div>
   
 <section className="hero about-hero">
        <div className="hero-content">
          <h1>ॐ Donation Archive ॐ</h1>
          <p> Our Donation Archive honors the heartfelt contributions of devotees who support the temple’s
             spiritual and community activities.</p>
        </div>
      </section>
        
    

   
      <section className="donation-archive-sectionn">
        <section className="festivalss">
          <img className="flower-bg1" src={flowerPattern} alt="flower pattern" />
          <img className="flower-bg2" src={flowerPattern} alt="flower pattern" />

          <div className="donation-archive-grid">
            {donations.map((item, index) => (
              <DonationCard key={index} {...item} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
