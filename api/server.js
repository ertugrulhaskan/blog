// .env Config
require("dotenv").config();

import { readFileSync } from "fs";

// https Server
import { createServer } from "https";
import express from "express";

const app = express();
const port = process.env.PORT;
const serverOptions = {
  key: readFileSync("./certificate/key.pem", "utf8"),
  cert: readFileSync("./certificate/cert.pem", "utf8"),
};

import routes from "./routes/index";
routes(app);

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

const $https = createServer(serverOptions, app);

$https.listen(port, () => {
  console.log("> Server is up and running on port : " + port);
});
