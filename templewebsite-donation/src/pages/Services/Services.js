import React from 'react'
import flowerPattern from '../../assest/flower-pattern.svg';
import { GiPrayer } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaPrayingHands } from "react-icons/fa";
import dailyimg from '../../assest/dailypooja.jpg'
import spiriimg from '../../assest/spiritual.jpg'
import commuimg from '../../assest/bright.jpg'
import './Services.css'
function Services() {
    return (
        <div>

            <section className="services">
                <img className="flower-bg1" src={flowerPattern} alt="diya-image" />
                <img className="flower-bg2" src={flowerPattern} alt="diya-image" />
                <h2 className="services-heading">ॐ Our Services ॐ</h2>
                <div className="card-container">
                    <div className="cardd">
                        <img src={dailyimg} alt="Daily Pooja" className="card-img" />
                        <h3><GiPrayer size={30} /> Daily Pooja</h3>
                        <p>Join our sacred morning and evening rituals every day.</p>
                        <p>Experience Aarti, Bhajans & Prasad with fellow devotees.</p>
                        <p>Seek peace, blessings, and spiritual harmony daily.</p>
                    </div>

                    <div className="cardd">
                        <img src={spiriimg} alt="Special Rituals" className="card-img" />
                        <h3><FaPrayingHands size={30} /> Special Rituals</h3>
                        <p>Book sacred poojas for Satyanarayan, Griha Pravesh, Navagraha Shanti, Weddings, Birthdays & Anniversaries.</p>
                        <p>Invoke divine blessings for health, prosperity, and family harmony.</p>
                    </div>

                    <div className="cardd">
                        <img src={commuimg} alt="Community Service" className="card-img" />
                        <h3><FaHandHoldingHeart size={30} /> Community Service</h3>
                        <p>Join cultural & social events that bring people together.</p>
                        <p>Contribute to welfare programs, seva, and celebrations.</p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services