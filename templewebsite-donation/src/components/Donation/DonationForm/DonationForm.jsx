import React, { useState } from "react";
import axios from "axios";
import "./DonationForm.css";
import { useNavigate } from "react-router-dom";
import scannerImage from "../../../assest/scanner.png"; // ✅ Ensure this path is correct

export default function DonationForm() {
  const presets = [50, 100, 300, 500, 1000];
  const navigate = useNavigate();

  const campaigns = [
    { id: 1, title: "Education for Every Child", target: 10000 },
    { id: 2, title: "Clean Water Initiative", target: 25000 },
    { id: 3, title: "Food & Shelter Program", target: 15000 },
  ];

  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState(100);
  const [selectedPreset, setSelectedPreset] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [campaignId, setCampaignId] = useState(campaigns[0].id);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  function choosePreset(val) {
    setSelectedPreset(val);
    setAmount(val);
    setCustomAmount(val);
    setErrors((prev) => ({ ...prev, amount: undefined }));
  }

  function onCustomChange(e) {
    const v = Number(e.target.value.replace(/[^0-9.]/g, "")) || 0;
    setCustomAmount(v);
    setAmount(v);
    setSelectedPreset(null);
    setErrors((prev) => ({ ...prev, amount: undefined }));
  }

  function validate() {
    const newErrors = {};
    if (!amount || Number(amount) <= 0)
      newErrors.amount = "This field is required";

    const emailTrim = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrim) newErrors.email = "This field is required";
    else if (!emailRegex.test(emailTrim))
      newErrors.email = "Please enter a valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function submit(e) {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await axios.post("http://localhost:5000/api/donation", {
        email,
        amount,
        paymentMethod,
        campaignId,
        message,
      });

      if (res.data.success) {
        alert(res.data.message);
        setAmount(100);
        setCustomAmount(100);
        setSelectedPreset(100);
        setPaymentMethod("online");
        setMessage("");
        setEmail("");
      } else {
        alert("Donation failed. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting donation:", err);
      alert("Something went wrong! Please try again.");
    }
  }

  // ✅ Input style: black text inside input
  const inputStyle = {
    width: "100%",
    margin: "10px 0 20px 0",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    outline: "none",
  };

  return (
    <div className="donation-container">
      {/* Hero Section */}
      <section className="hero about-hero">
        <div className="hero-content">
          <h1>ॐ Donation ॐ</h1>
          <p>
            Each donation reflects faith, devotion, and support towards temple
            activities and spiritual growth.
          </p>
        </div>
      </section>

      {/* Header */}
      <header className="donation-header">
        <p className="donation-subtitle">ॐ DONATE TO HELP ॐ</p>
        <h1 className="donation-title">
          Make a donation to <br /> help us
        </h1>
      </header>

      {/* Scanner Section */}
      <section
        className="scanner-section"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        {/* ✅ Changed to red color */}
        <h2 style={{ color: "red", marginBottom: "10px", fontSize: "22px" }}>
          Scan Here to Donate
        </h2>

        <img
          src={scannerImage}
          alt="Scanner QR Code"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "10px",
            border: "2px solid #ccc",
            display: "block",
            margin: "0 auto 20px",
          }}
        />

        <div
          style={{
            textAlign: "center",
            width: "250px",
            margin: "0 auto 40px",
          }}
        >
          <label>
            <strong style={{ color: "red", fontSize: "18px" }}>
              Enter Amount
            </strong>
          </label>
          <input
            type="number"
            placeholder="Enter Amount"
            style={inputStyle}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </section>

      {/* Main Donation Form */}
      <main className="donation-main">
        <form onSubmit={submit} className="donationformm" noValidate>
          {/* Donation Amount */}
          <section>
            <h2 className="donation-section-title">Donation Amount</h2>
            <div className="donation-amount-wrapper">
              <div
                className={`donation-amount-input ${
                  errors.amount ? "input-error-wrapper" : ""
                }`}
              >
                <span className="donation-currency">Rs</span>
                <input
                  type="text"
                  inputMode="decimal"
                  value={customAmount}
                  onChange={onCustomChange}
                  className={`donation-input ${
                    errors.amount ? "input-error" : ""
                  }`}
                  placeholder="Rs100"
                />
              </div>

              <div className="donation-presets">
                {presets.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => choosePreset(p)}
                    className={`donation-preset ${
                      selectedPreset === p ? "active" : ""
                    }`}
                  >
                    Rs {p}.00
                  </button>
                ))}
              </div>
            </div>
            {errors.amount && (
              <div className="error-text">{errors.amount}</div>
            )}
          </section>

          {/* Payment Method */}
          <section>
            <h3 className="donation-section-title">Payment Method</h3>
            <div className="donation-options">
              <label className="donation-radio">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                />
                <span>Online Payment</span>
              </label>

              <label className="donation-radio">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "offline"}
                  onChange={() => setPaymentMethod("offline")}
                />
                <span>Offline Payment</span>
              </label>
            </div>
          </section>

          {/* Campaign Section */}
          <section>
            <h3 className="donation-section-title">Campaigns</h3>
            <select
              className="donation-select"
              value={campaignId}
              onChange={(e) => setCampaignId(Number(e.target.value))}
            >
              {campaigns.map((c) => (
                <option key={c.id} value={c.id}>
                  {`${c.title} - (Target: ${c.target}.00)`}
                </option>
              ))}
            </select>
          </section>

          {/* Message */}
          <section>
            <h3 className="donation-section-title">Message</h3>
            <textarea
              className="donation-textarea"
              placeholder="Enter Message (Optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </section>

          {/* Email Section */}
          <section>
            <h3 className="donation-section-title">Email</h3>
            <input
              className={`donation-input ${
                errors.email ? "input-error" : ""
              }`}
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: undefined }));
              }}
            />
            {errors.email && (
              <div className="error-text">{errors.email}</div>
            )}
          </section>

          <div className="donation-submit">
            <button type="submit" className="donation-btn">
              DONATE NOW
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
