import express from "express";
import * as userController from "../controller/userController.js";

const router = express.Router();

router.route("/register").post(userController.createUser); 

export default router;
