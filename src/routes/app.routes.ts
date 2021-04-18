import express from "express";
import { logger } from "../middleware/logger.middleware";
import { router } from "./../controller/home.controller";
const app = express.Router();

app.all("/*", logger);
app.use("/", router);

export default app;
