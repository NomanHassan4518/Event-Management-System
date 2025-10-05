import RegisteredEvent from "../models/registeredEvent.js";

export const registerEvent = async (req, res) => {
  try {
    const { userId, eventId, name, email, phone, seatsBooked } = req.body;
    console.log(userId, eventId, name, email, phone, seatsBooked);
    

    if (!userId || !eventId || !name || !email || !phone || !seatsBooked) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRegistration = new RegisteredEvent({
      userId,
      eventId,
      name,
      email,
      phone,
      seatsBooked,
    });

    await newRegistration.save();

    res.status(201).json({
      message: "Event booked successfully",
      registration: newRegistration,
    });
  } catch (error) {
    console.error("Error registering event:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await RegisteredEvent.find()
      .populate("userId", "name email")
      .populate("eventId", "title date location");

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching registrations", error: error.message });
  }
};

export const getUserRegistrations = async (req, res) => {
  try {
    const { userId } = req.params;

    const registrations = await RegisteredEvent.find({ userId })
      .populate("eventId", "title date location image");

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user registrations", error: error.message });
  }
};

