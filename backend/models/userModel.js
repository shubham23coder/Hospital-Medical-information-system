import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, requried: true },
  email: { type: String, requried: true, unique: true },
  password: { type: String, requried: true },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dmp0yfrmk/image/upload/v1740720499/uallsn6sw0qjnwdh9zbu.png",
  },
  address: { type: Object, default: { line1: "", line2: "" } },
  gender: { type: String, default: "Not Selected" },
  dob: { type: String, default: "Not Selected" },
  phone: { type: String, default: "0000000000" },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
