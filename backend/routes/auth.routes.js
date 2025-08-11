import express from "express";
import { signup, login, logout, authCheck } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup); // Maps POST /api/auth/signup to the signup function
router.post("/login", login);
router.post("/logout", logout);
router.get("/authCheck", authCheck);

export default router;