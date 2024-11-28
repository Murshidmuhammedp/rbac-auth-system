import mongoose from "mongoose";

const newUser = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ['Admin', 'User', 'Moderator'],
        default: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const User = mongoose.model("User", newUser);

export default User;