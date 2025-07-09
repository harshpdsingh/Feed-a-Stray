// models/Admin.js
import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  razorpayid: { type: String, required: true },
  razorpaysecret: { type: String, required: true },
}, {
  timestamps: true
});

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
