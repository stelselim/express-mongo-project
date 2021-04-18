import express from "express";
import bodyParser from "body-parser";
import appRoutes from "./routes/app.routes";
import helmet from "helmet";
import cors from "cors";
import config from "./config/config";

const app = express();
const port = config.localPort;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

app.use("/", appRoutes);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
console.log("Hey There");
