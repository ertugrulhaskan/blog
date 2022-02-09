import {
  newComment,
  getAllComments,
  getComments,
} from "../../controllers/comments";

const router = require("express").Router();

// Create
// router.post("/comment", newComment);

// Read
// router.get("/comments", getAllComments);
router.get("/comment/:postID", getComments);

export default router;
