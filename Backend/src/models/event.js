import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Business", "Technology", "Marketing", "Sport"],
      required: true,
    },
    speakers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Speaker",
      },
    ],
    sponsor: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema);
