import express from 'express';
import { loginUser, logoutUser, registerUser, verifytUser } from '../controllers/AuthControllers.js';
import protect from '../middlewares/Auth.js';

const AuthRouter = express.Router();

AuthRouter.post('/register', registerUser)
AuthRouter.post('/login', loginUser)
AuthRouter.get('/verify', protect, verifytUser)
AuthRouter.post('/logout', protect, logoutUser)

export default AuthRouter;