import express from "express";
import bodyParser from "body-parser";
import appRoutes from "./routes/app.routes";
import helmet from "helmet";
import cors from "cors";
import config from "./config/config";
import errorMiddleware from "./middleware/error.middleware";
import mongoose from 'mongoose';
import { connectToMongoose } from './model/config'

const app = express();
const port = config.localPort;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

connectToMongoose();

const db = mongoose.connection;
db.once('open', function () {
  console.log("Connected");
});


app.use("/", appRoutes);
app.use(errorMiddleware);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
