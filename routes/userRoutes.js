import express from "express";
import { signIn, signUp } from "../controllers/userController.js";

const router = express.Router();

router.post('/register', signUp);

router.post('/login', signIn);

export default router;