import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    message: {
      type: String,
      trim: true,
      required: true,
      minlength: 5,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model("Contact", contactSchema);