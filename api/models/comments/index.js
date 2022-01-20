import { Schema } from "mongoose";

export const commentSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  comment: {
    type: String,
  },
});
