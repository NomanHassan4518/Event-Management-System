import express from "express";
import {
  createSpeaker,
  getSpeakers,
  getSpeakerById,
  updateSpeaker,
  deleteSpeaker,
} from "../controllers/speakerController.js";

const router = express.Router();

router.post("/", createSpeaker);
router.get("/", getSpeakers);
router.get("/:id", getSpeakerById);
router.put("/:id", updateSpeaker);
router.delete("/:id", deleteSpeaker);

export default router;
