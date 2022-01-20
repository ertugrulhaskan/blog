import { newBlogPost } from "../controllers";

const routes = (app) => {
  app
    .route("/api/article")
    .get(
      (req, res, next) => {
        // Middleware
        console.info(`Captain's Log \n ${req}`);
        next();
      },
      (req, res, next) => {
        res.send("GET Method");
      }
    )
    .post(newBlogPost);

  // .post((req, res) => {
  //   res.send("POST Method");
  // });
};

export default routes;
