import express from 'express'
import { adminSignIn, adminSignUp } from '../controllers/adminController/adminController.js';
import { BlockandUnblock, ViewallUser } from '../controllers/adminController/adminUserController.js';
import { verifyAdmin } from '../middlewares/adminJwtToken.js';

const router = express.Router();

// Admin Registration
router.post('/register', adminSignUp);

// Admin Login
router.post('/login', adminSignIn);

// Get all users
router.get('/users', verifyAdmin, ViewallUser);

// Block or Unblock a user
router.patch('/users/:id/block', verifyAdmin, BlockandUnblock)

export default router