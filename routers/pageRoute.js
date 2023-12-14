import express from 'express';
import * as pageController from "../controller/pageController.js";

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/register").get(pageController.getRegisterPage);

export default router;

//ALTERNATİVE

// import express from "express";
// import {getIndexPage,getAboutPage} from "../controller/pageController.js";

// const router = express.Router();

// router.route("/").get(getIndexPage);
// router.route("/about").get(getAboutPage);

// export default router