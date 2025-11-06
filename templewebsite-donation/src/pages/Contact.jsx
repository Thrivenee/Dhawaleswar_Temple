import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // ✅ Send form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.firstName.trim()) newErrors.firstName = "Please enter your first name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.number.trim()) newErrors.number = "Please enter your phone number.";
    else if (!phoneRegex.test(formData.number))
      newErrors.number = "Please enter a valid 10-digit phone number.";
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message Sent Successfully!");
        setFormData({ firstName: "", lastName: "", email: "", number: "", message: "" });
      } else {
        setStatus(`❌ ${data.error || "Something went wrong."}`);
      }
    } catch (err) {
      setStatus("❌ Server Error. Please try again later.");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="contact-page">
      <section className="hero about-hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Connecting devotees with guidance, blessings, and support.</p>
        </div>
      </section>

      <section className="contact-info-bar">
        <div className="info-box">
          <i className="fa-solid fa-phone"></i>
          <div className="info-text">
            <h3>Phone Number</h3>
            <p><a href="tel:+919337287145">+91 9337287145</a></p>
          </div>
        </div>

        <div className="info-box">
          <i className="fa-solid fa-envelope"></i>
          <div className="info-text">
            <h3>Email</h3>
            <p><a href="mailto:chaitanyarana4@gmail.com">chaitanyarana4@gmail.com</a></p>
          </div>
        </div>

        <div className="info-box">
          <i className="fa-solid fa-map-marker-alt"></i>
          <div className="info-text">
            <h3>Dhabaleswar Temple Address</h3>
            <p>Gurujanga, Khurda, Odisha, India, 752055</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="contact-input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && <p className="error-text">{errors.firstName}</p>}
            </div>
            <div className="input-group">
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="contact-input"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="number"
                placeholder="Enter your number"
                className="contact-input"
                value={formData.number}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  setFormData({ ...formData, number: value });
                  setErrors({ ...errors, number: "" });
                }}
                maxLength={10}
                required
              />
              {errors.number && <p className="error-text">{errors.number}</p>}
            </div>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              placeholder="Type your message here"
              value={formData.message}
              className="contact-textarea"
              onChange={handleChange}
              maxLength={300}
              required
            ></textarea>
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>

          <p className="char-count">{formData.message.length}/300 characters</p>

          <button type="submit" className="send-btn">Send Message</button>

          {status && (
            <p className={`status-message ${status.startsWith("❌") ? "error" : "success"}`}>
              {status}
            </p>
          )}
        </form>

        <div className="contact-map">
          <iframe
            title="Dhabaleswar Temple Map"
            src="https://www.google.com/maps?q=Dhabaleswar%20Temple%20Gurujanga%20Khurda%20Odisha%20India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
