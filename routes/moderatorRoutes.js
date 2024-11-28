import express from 'express'
import { moderatorSignIn, ModeratorSignUp } from '../controllers/moderatorController/moderatorController.js'
import { getallUser } from '../controllers/moderatorController/userController.js';
import { verifyModerator } from '../middlewares/moderatorJwtToken.js';
import { moderatorProfile, updateProfile } from '../controllers/moderatorController/moderatorProfile.js';

const router = express.Router()

router.post('/register', ModeratorSignUp);

router.post('/login', moderatorSignIn);

// View all Users
router.get('/users', verifyModerator, getallUser);

// View Moderator Profile
router.get('/profile/:id', verifyModerator, moderatorProfile);

// Update Moderator Profile
router.patch('/profile/update/:id', verifyModerator, updateProfile);

export default router;