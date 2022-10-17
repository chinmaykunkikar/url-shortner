import express from "express";
import config from "config";
import routes from "../routes";
import bodyParser from "body-parser";
import database from "./database";

const app = express();
const port = config.get("port");

app.use(bodyParser.json());

app.listen(port, () => {
  database();
  console.log("App running");
  routes(app);
});
