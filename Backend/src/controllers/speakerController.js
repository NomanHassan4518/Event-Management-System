import { Speaker } from "../models/speaker.js";

export const createSpeaker = async (req, res) => {
 const speakers = [
  {
    name: "John Carter",
    title: "Senior Visual Designer",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop",
  },
  {
    name: "David Kim",
    title: "AI Researcher",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Smith",
    title: "Event Organizer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Brown",
    title: "Web Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Olivia Johnson",
    title: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    name: "James Wilson",
    title: "Tech Speaker",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=400&fit=crop",
  },
  {
    name: "Isabella Martinez",
    title: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop",
  },
  {
    name: "Sophia Adams",
    title: "Business Consultant",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
  },
];

  try {
    const { name, title, image, events } = req.body;
    await Speaker.insertMany(speakers)
    const speaker = await Speaker.create({ name, title, image, events });
    res.status(201).json(speaker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSpeakers = async (req, res) => {
  try {
    const speakers = await Speaker.find().populate("events");
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
