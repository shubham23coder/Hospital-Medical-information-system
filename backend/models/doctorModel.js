import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, requried: true },
    email: { type: String, requried: true, unique: true },
    password: { type: String, requried: true },
    image: { type: String, requried: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, requried: true },
    about: { type: String, requried: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, requried: true },
    address: { type: Object, requried: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false }
);

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

export default doctorModel;
