import { newBlogPost, getAllPosts, getPostWithID } from "../controllers";

const routes = (app) => {
  app
    .route("/api/article")
    .get((req, res, next) => {
      // Middleware
      console.info(`Captain's Log \n ${req}`);
      next();
    }, getAllPosts)
    .post(newBlogPost);

  app
    .route("/api/article/:id")
    .get(getPostWithID)
    .put((req, res) => {
      res.send("PUT Method");
    })
    .delete((res, req) => {
      res.send("DELETE Method");
    });
};

export default routes;
