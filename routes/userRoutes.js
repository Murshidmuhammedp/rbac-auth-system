import express from "express";
import { userSignIn, userSignUp } from "../controllers/userController/userController.js";
import { updateProfile, userProfile } from "../controllers/userController/userProfile.js";

const router = express.Router();

router.post('/register', userSignUp);

router.post('/login', userSignIn);

// View User Profile
router.get('/profile/:id', userProfile);

// Update User Profile
router.patch('/profile/update/:id', updateProfile);

export default router;