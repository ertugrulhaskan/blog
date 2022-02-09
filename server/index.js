// .env Config
require("dotenv").config();

// SSL Server Config
import { readFileSync } from "fs";
const serverOptions = {
  key: readFileSync("./certificate/key.pem", "utf8"),
  cert: readFileSync("./certificate/cert.pem", "utf8"),
};

import express from "express";
const app = express();
const port = process.env.PORT;

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/layouts"));
app.use(express.static("public"));

import { urlencoded } from "body-parser";
app.use(urlencoded({ extended: true }));

// https Server
import { createServer } from "https";
const $https = createServer(serverOptions, app);

// mongodb connection
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose
  .connect(`${process.env.DB_HOST}:${process.env.DB_PORT}/blog`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("> Connected to the MongoDB...");
    $https.listen(port, () => {
      console.log(`> 🖖 U.S.S. Enterprise is running on -p ${port} `);
    });
  })
  .catch((err) => {
    console.log(`> Error while connecting to mongoDB : ${err.message}`);
  });

// Server Rendering Router
import router from "./router";
app.use(router);
import postRouter from "./router/posts";
app.use(postRouter);
import commentRouter from "./router/comments";
app.use(commentRouter);
