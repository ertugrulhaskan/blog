import { newBlogPost, getAllPosts } from "../controllers";

const routes = (app) => {
  app
    .route("/api/article")
    .get((req, res, next) => {
      // Middleware
      console.info(`Captain's Log \n ${req}`);
      next();
    }, getAllPosts)
    .post(newBlogPost);

  // .post((req, res) => {
  //   res.send("POST Method");
  // });
};

export default routes;
