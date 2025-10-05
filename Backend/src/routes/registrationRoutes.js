import express from "express";
import {
  registerEvent,
  getAllRegistrations,
  getUserRegistrations,
} from "../controllers/registrationController.js";

const router = express.Router();

router.post("/", registerEvent);
router.get("/", getAllRegistrations);
router.get("/:userId", getUserRegistrations);

export default router;
