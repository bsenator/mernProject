import express from "express";
import * as photosController from "../controller/photosController.js";

const router = express.Router();

router
  .route("/")
  .post(photosController.createPhoto)
  .get(photosController.getAllPhotos);

export default router;
