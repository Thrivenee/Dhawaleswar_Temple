import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    number: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// Explicitly name collection "contact"
const Contact = mongoose.model("Contact", contactSchema, "contact");

export default Contact;
