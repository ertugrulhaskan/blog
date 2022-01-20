import { model } from "mongoose";
import { articleSchema } from "../models";

const Post = model("Article", articleSchema);

export const newBlogPost = (req, res) => {
  let newPost = new Post(req.body);
  console.log(newPost);
  newPost.save((err, blogPost) => {
    if (err) {
      res.send(err);
    }
    res.json(blogPost);
  });
};

export const getAllPosts = (req, res) => {
  Post.find({}, (err, blogPost) => {
    if (err) {
      res.send(err);
    }
    res.json(blogPost);
  });
};
