import express from "express";

export const error = (
  err: express.ErrorRequestHandler,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  res.send(err.name);
};
