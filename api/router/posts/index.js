import {
  newBlogPost,
  getAllPosts,
  getPostWithID,
  updatePost,
  deletePost,
} from "../../controllers/posts";

const router = require("express").Router();

// Create
router.post("/post", newBlogPost);

// Read
router.get("/posts", getAllPosts);
router.get("/post/:id", getPostWithID);

// Update
router.put("/post/:id", updatePost);

// Delete
router.delete("/post/:id", deletePost);

export default router;
