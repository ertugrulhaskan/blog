import { newBlogPost, getPostWithID, likePost } from "../../controllers/posts";

const router = require("express").Router();

// Create
router.post("/post", newBlogPost);

// Read
router.get("/post/:id", getPostWithID);

// Update
router.get("/post/like/:postID", likePost);

export default router;
