import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, default: "user" } // Adding role field with default value
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;