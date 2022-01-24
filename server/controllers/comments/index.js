import { model } from "mongoose";
import { commentSchema } from "../../models/comments";

const Comment = model("Comment", commentSchema);

// Get all comments that related with a post
export const getComments = async (req, res) => {
  await Comment.find(
    {
      postID: "61e9bc4dffcfc06cc5b84f09",
    },
    (err, res) => {
      if (err) return err;
      return res;
    }
  ).clone();
};
