import {
  newBlogPost,
  getAllPosts,
  getPostWithID,
  updatePost,
  deletePost,
} from "../controllers";

const routes = (app) => {
  // Getting all posts and Adding a new post
  app
    .route("/api/article")
    .get((req, res, next) => {
      // Middleware
      // console.info(`Captain's Log \n ${req}`);
      next();
    }, getAllPosts)
    .post(newBlogPost);

  // Post read, update, and delete
  app
    .route("/api/article/:id")
    .get(getPostWithID)
    .put(updatePost)
    .delete(deletePost);
};

export default routes;
