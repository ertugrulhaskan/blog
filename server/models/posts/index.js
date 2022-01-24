import { Schema } from "mongoose";

export const postSchema = new Schema({
  date: { type: Date, default: Date.now },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: "Alex Haskan",
  },
  content: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  visibility: {
    type: Boolean,
    default: true,
  },
});
