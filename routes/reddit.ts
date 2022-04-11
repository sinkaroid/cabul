/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-ignore
import { Request, Response } from "express";
import Logger from "../utils/logger";
import request from "../utils/request";
const paths = [
  "/r",
  "/reddit",
];

async function handler(req: Request, res: Response) {
  const subreddit = req.body.tags || req.query.subreddit ;
  const useragent = req.body.useragent;

  let response;

  try {
    response = await request("reddit", {
      subreddit,
      useragent
    });

  } catch (err: any) {
    Logger.error(err);
    response = {
      success: false,
      error: {
        msg: err.message
      }
    };
  }
  res.send(response);
}

export {
  paths,
  handler
};