import express from 'express'
import { moderatorSignIn, ModeratorSignUp } from '../controllers/moderatorController/moderatorController.js'

const router = express.Router()

router.post('/register',ModeratorSignUp);

router.post('/login',moderatorSignIn);

export default router