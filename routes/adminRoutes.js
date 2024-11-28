import express from 'express'
import { adminSignIn, adminSignUp } from '../controllers/adminController.js';

const router = express.Router();

router.post('/register', adminSignUp);

router.post('/login', adminSignIn);

export default router