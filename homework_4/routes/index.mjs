import { Router } from "express";
import MainController from "../controllers/mainController.mjs";

const router = Router();
router.get("/", MainController.homePage);
router.get("/list-cars", MainController.listCarsPage);
router.get("/registration-form", MainController.registrationForm);

export default router;
