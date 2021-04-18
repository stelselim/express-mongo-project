import express from "express";
import {
  homeSendHelloForGetRequest,
  homeSendHelloForPostRequest,
} from "../services/home.services";
export const router = express.Router();

router.post("/", (req, res) => {
  try {
    console.log("Hello POST Request");
    const val = homeSendHelloForPostRequest();
    res.sendStatus(200).send({ message: val });
  } catch (error) {
    res.send("Error POST: " + error.message);
  }
});

router.get("/", (req, res) => {
  try {
    console.log("Hello Get Request");
    const val = homeSendHelloForGetRequest();
    res.sendStatus(200).send({ message: val });
  } catch (error) {
    res.send("Error GET: " + error.message);
  }
});
