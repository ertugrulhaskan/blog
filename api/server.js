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

// mongodb connection
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose
  .connect(`${process.env.DB_HOST}:${process.env.DB_PORT}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("> Connected to the MongoDB...");
  })
  .catch((err) => {
    console.log(`> Error while connecting to mongoDB : ${err.message}`);
  });

// body-parser Setup
import bodyParser from "body-parser";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
import routes from "./routes";
routes(app);

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

const $https = createServer(serverOptions, app);

$https.listen(port, () => {
  console.log(`> 🖖 U.S.S. Enterprise is running on -p ${port} `);
});
