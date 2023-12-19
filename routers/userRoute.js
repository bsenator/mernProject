import express from "express";
import * as userController from "../controller/userController.js";
import * as autMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/register").post(userController.createUser); 
router.route("/login").post(userController.loginUser); 
router
    .route("/dashboard")
    .get(autMiddleware.authenticateToken, userController.getDashboardPage); 

export default router;
