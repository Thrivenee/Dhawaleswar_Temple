import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    amount: {
      type: Number,
      required: [true, "Donation amount is required"],
    },
    paymentMethod: {
      type: String,
      enum: ["online", "offline"],
      required: [true, "Payment method is required"],
    },
    campaignId: {
      type: Number,
      required: [true, "Campaign ID is required"],
    },
    message: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema, "donations");

export default Donation;
