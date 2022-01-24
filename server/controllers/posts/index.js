import moment from "moment";
import { model } from "mongoose";
import { postSchema } from "../../models/posts";
import { getComments } from "../comments";

const Post = model("Post", postSchema);

// Adding a new post
export const newBlogPost = async (req, res, next) => {
  const newPost = new Post(req.body);
  await newPost.save((err) => {
    if (err) {
      res.render("new-post", { error: err.message });
      return err;
    }
    res.redirect("/");
  });
};

// Get a post with ID
export const getPostWithID = (req, res) => {
  let comments = getComments(req.params.id);
  Post.findById(req.params.id, (err, blogPost) => {
    if (err) {
      res.send(err);
    }
    res.render("post-detail", {
      post: blogPost,
      moment: moment,
      comments: comments,
    });
  });
};

export const likePost = (req, res) => {
  Post.updateOne(
    {
      _id: req.params.postID,
    },
    {
      $inc: { likes: 1 },
    },
    (err) => {
      if (err) return err;
      res.redirect("/");
    }
  );
};
