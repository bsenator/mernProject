import express from "express";
import * as photoController from "../controller/photoController.js";

const router = express.Router();

router
  .route("/")
  .post(photoController.createPhoto)
  .get(photoController.getAllPhotos);
router.route("/:id").get(photoController.getAllPhoto)
export default router;
