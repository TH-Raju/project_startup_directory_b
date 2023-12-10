import express from "express";
import { startupController } from "../controller/startupControl.js";
const router = express.Router();

router.get("/", startupController.getStartup);
router.get("/search", startupController.searchTerm);
router.post("/add", startupController.addStartup);

export const startupRoutes = router;
