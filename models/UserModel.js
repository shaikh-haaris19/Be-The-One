import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({

    email: { type: String, required: true, unique: true },
    name: { type: String, default: '' },
    userName: { type: String, required: true },
    profilePic: { type: String, default: '' },

}, { timestamps: true })

const User = mongoose.models.User || mongoose.model("User", UserSchema)
export default User;