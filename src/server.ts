import "reflect-metadata";
import express from "express";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);


app.listen(3200, () => {
  console.log("Server is running on port 3200");
});