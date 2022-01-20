import { Schema } from "mongoose";

export const postSchema = new Schema({
  date: { type: Date, default: Date.now },
  title: {
    type: String,
    required: "You need an title",
  },
  author: {
    type: String,
    required: "Who one type this article?",
    default: "Alex Haskan",
  },
  body: {
    type: String,
    required: "You need type somethings...",
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
