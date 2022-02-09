import { model } from "mongoose";
import { commentSchema } from "../../models/comments";

const Comment = model("Comment", commentSchema);

// Get all comments that related with a post
export const getComments = (postID) => {
  return Comment.find({ postID: postID }, (err, comments) => {
    console.log(comments);
    if (err) {
      return err;
    }
    return comments;
  }).clone();
};
