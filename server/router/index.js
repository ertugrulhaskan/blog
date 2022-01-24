import { Router } from "express";
const router = Router();

import { model } from "mongoose";
import { postSchema } from "../models/posts";
const Post = model("Post", postSchema);

import moment from "moment";

router.get("/", (req, res) => {
  Post.find({}, (err, getAllPosts) => {
    if (err) {
      res.send(err);
    }
    res.render("index", { posts: getAllPosts, moment: moment });
  });
});

router.get("/post", (req, res) => {
  res.render("new-post", { error: false });
});

export default router;
