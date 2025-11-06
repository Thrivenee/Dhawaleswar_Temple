import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST route to store form data
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, number, message } = req.body;

    if (!firstName || !email || !number || !message) {
      return res.status(400).json({ error: "Please fill all required fields." });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      number,
      message,
    });

    await newContact.save();

    res.status(201).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

export default router;
