import express from "express";
import { authenticateUser } from "../../middlewares/authentication.js";
import { login, register, logout } from "../../modules/auth/auth.controller.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

export default router;
