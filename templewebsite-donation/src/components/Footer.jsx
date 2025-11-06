
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const getLinkClass = (path) => {
    return location.pathname === path ? "active-link" : "";
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Left Side - Copyright */}
        <div className="footer-left">
          <p>© 2025 Dhabaleswar Temple. All rights reserved.</p>
        </div>

        {/* Middle - Social Icons */}
        <div className="footer-center">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>

    
        <div className="footer-right">
           <Link to="/sloka" className={getLinkClass("/sloka")}>Sloka / Mantra</Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
