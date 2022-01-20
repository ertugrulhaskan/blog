import { model } from "mongoose";
import { articleSchema } from "../models";

const Post = model("Article", articleSchema);

// Adding new article
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

// Get all articles
export const getAllPosts = (req, res) => {
  Post.find({}, (err, blogPost) => {
    if (err) {
      res.send(err);
    }
    res.json(blogPost);
  });
};

// Get article with ID
export const getPostWithID = (req, res) => {
  Post.findById(req.params.id, (err, blogPost) => {
    if (err) {
      res.send(err);
    }
    res.json(blogPost);
  });
};
