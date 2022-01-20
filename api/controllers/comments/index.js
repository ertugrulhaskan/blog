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

// Get all comments // Collection: comments
export const getAllComments = (req, res) => {
  Comment.find({}, (err, comment) => {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  });
};

// Get all comments that related with a post
export const getComments = (req, res) => {
  Comment.find(
    { postID: req.params.postID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, blogPost) => {
      if (err) {
        res.send(err);
      }
      res.json(blogPost);
    }
  );
};
