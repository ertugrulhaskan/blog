const routes = (app) => {
  app
    .route("/contact")
    .get((req, res) => {
      res.send("test get!");
    })
    .post((req, res) => {
      res.send("test put");
    });
};

export default routes;
