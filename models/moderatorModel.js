import mongoose from "mongoose";

const newModerator = new mongoose.Schema({
    moderatorName: {
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
        default: 'Moderator',
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

const Moderator = mongoose.model("Moderator", newModerator);

export default Moderator;