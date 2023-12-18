import express from 'express';
import * as pageController from "../controller/pageController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router
    .route("/")
    .get(authMiddleware.authenticateToken, pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/register").get(pageController.getRegisterPage);
router.route("/login").get(pageController.getLoginPage);

export default router;










//ALTERNATİVE code

// import express from "express";
// import {getIndexPage,getAboutPage} from "../controller/pageController.js";

// const router = express.Router();

// router.route("/").get(getIndexPage);
// router.route("/about").get(getAboutPage);

// export default router