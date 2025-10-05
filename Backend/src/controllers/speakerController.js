import { Speaker } from "../models/speaker.js";

export const createSpeaker = async (req, res) => {
 

  try {
    const { name, title, image, events } = req.body;
    const speaker = await Speaker.create({ name, title, image, events });
    res.status(201).json(speaker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSpeakers = async (req, res) => {
  try {
    const speakers = await Speaker.find()
    res.status(200).json(speakers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSpeakerById = async (req, res) => {
  try {
    const speaker = await Speaker.findById(req.params.id).populate("events");
    if (!speaker) return res.status(404).json({ message: "Speaker not found" });
    res.status(200).json(speaker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSpeaker = async (req, res) => {
  try {
    const { name, title, image, events } = req.body;
    const speaker = await Speaker.findByIdAndUpdate(
      req.params.id,
      { name, title, image, events },
      { new: true }
    );
    if (!speaker) return res.status(404).json({ message: "Speaker not found" });
    res.status(200).json(speaker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSpeaker = async (req, res) => {
  try {
    const speaker = await Speaker.findByIdAndDelete(req.params.id);
    if (!speaker) return res.status(404).json({ message: "Speaker not found" });
    res.status(200).json({ message: "Speaker deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
