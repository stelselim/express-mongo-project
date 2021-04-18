import express from "express";

export const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("Request Date : " + req.ip + " Date" + new Date());
  next();
};
