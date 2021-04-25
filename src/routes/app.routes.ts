import express from "express";
import { logger } from "../middleware/logger.middleware";
import { router } from "./../controller/home.controller";
import { router as authrouter } from "./../controller/auth.controller";
import { router as userRouter } from "./../controller/user.controller";
const app = express.Router();

app.all("/*", logger);
app.use("/", router);
app.use("/auth", authrouter)
app.use("/user", userRouter)



export default app;
