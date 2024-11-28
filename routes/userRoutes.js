import express from "express";
import { userSignIn, userSignUp } from "../controllers/userController/userController.js";
import { updateProfile, userProfile } from "../controllers/userController/userProfile.js";
import { verifyUser } from "../middlewares/userJwtToken.js";

const router = express.Router();

router.post('/register', userSignUp);

router.post('/login', userSignIn);

// View User Profile
router.get('/profile/:id', verifyUser, userProfile);

// Update User Profile
router.patch('/profile/update/:id', verifyUser, updateProfile);

export default router;