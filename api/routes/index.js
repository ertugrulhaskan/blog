const routes = (app) => {
  app
    .route("/contact")
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
    .post((req, res) => {
      res.send("POST Method");
    });
};

export default routes;
