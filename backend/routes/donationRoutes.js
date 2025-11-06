import express from "express";
import Donation from "../models/Donation.js";

const router = express.Router();

// @desc    Create new donation
// @route   POST /api/donation
router.post("/", async (req, res) => {
  try {
    const { name, email, amount, paymentMethod, campaignId, message } = req.body;

    if (!name || !email || !amount || !paymentMethod || !campaignId) {
      return res.status(400).json({ error: "Please fill all required fields." });
    }

    const newDonation = new Donation({
      name,
      email,
      amount,
      paymentMethod,
      campaignId,
      message,
    });

    await newDonation.save();

    res
      .status(201)
      .json({ success: true, message: "Donation submitted successfully!" });
  } catch (error) {
    console.error("Error saving donation:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

// @desc    Get all donations
// @route   GET /api/donation
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
