import express from "express";
import { CreateUser, LoginUser } from "../controllers/UserControllers.js";

const router = express.Router();

// CREATE USER
router.post("/create-user", CreateUser);

// LOGIN USER
router.post("/login-user", LoginUser);

export default router;
