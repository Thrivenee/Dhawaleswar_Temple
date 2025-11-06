import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assest/Trishullogo.png"; // ✅ import your logo

function Navbar() {
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsHeroInView(true);
    const target = document.querySelector(".hero");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHeroInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [location.pathname]);

  const getLinkClass = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className={`navbar ${isHeroInView ? "transparent" : "colored"}`}>
  
      
       <div className="logo"><div className={isHeroInView ? "logoImg": "logoImg2"}></div><div className="logoText"> <span className="fancy-letter">D</span>habaleswar Temple</div></div>

   
      <ul className={`navbar-menu ${isOpen ? "show" : ""}`}>
        <li>
          <Link to="/" className={getLinkClass("/")} onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={getLinkClass("/about")} onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/events" className={getLinkClass("/events")} onClick={() => setIsOpen(false)}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/gallery" className={getLinkClass("/gallery")} onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" className={getLinkClass("/contact")} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <Link
          to="/donation"
          className={`navbar-item ${
            ["/donation", "/donationform"].includes(location.pathname) ? "active" : ""
          }`}onClick={() => setIsOpen(false)}
        >
            Donation
          </Link>
        </li>
      </ul>


      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
