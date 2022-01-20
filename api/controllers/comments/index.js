import { model } from "mongoose";
import { commentSchema } from "../../models/comments";

const Comment = model("Comment", commentSchema);

// Adding a new comment
export const newComment = (req, res) => {
  let newComment = new Comment(req.body);
  newComment.save((err, comment) => {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  });
};
