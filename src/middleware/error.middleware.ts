import express from "express";

const errorMiddleware = (
  err: express.ErrorRequestHandler,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.send("Error with " + err)

};
export default errorMiddleware;