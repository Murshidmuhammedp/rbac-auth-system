import mongoose from "mongoose";

const newAdmin = new mongoose.Schema({
    adminName: {
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
        default: 'Admin',
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const Admin = mongoose.model("Admin", newAdmin);

export default Admin;