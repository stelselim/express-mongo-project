import express from "express";
export const router = express.Router();
import Student from "../model/student";

router.post("/", (req, res) => {
  try {
    console.log("Hello ∫POST Request");
    res.send("Hello");
  } catch (error) {
    res.send("Error POST: " + error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("Hello Get Request");
    console.log(req.body)
    res.send({ message: "val" });
  } catch (error) {

    res.send("Error GET: " + error.message);
  }
});

router.get("/accounts", async (req, res) => {
  try {
    res.send({ message: " num" });
  } catch (error) {
    res.send("Error GET: " + error.message);
  }
});
