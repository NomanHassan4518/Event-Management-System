import mongoose from "mongoose";

const speakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // URL of speaker image
      required: true,
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "events",
      },
    ],
  },
  { timestamps: true }
);

export const Speaker = mongoose.model("Speaker", speakerSchema);
