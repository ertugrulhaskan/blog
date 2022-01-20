import { newComment } from "../../controllers/comments";

const router = require("express").Router();

// Create
router.post("/comment", newComment);

export default router;
