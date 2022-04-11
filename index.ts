/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-nocheck
import express from "express";
import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import Logger from "./utils/logger";
import constants from "./constants";
import * as pkg from "./package.json";

const app = new express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: unknown) => {
  if (req.path === "/log") return next();
  const query = req.query;
  const body = req.body;
  Logger.info(`[ ${new Date().toLocaleString()} ]`, {
    path: req.path,
    query, body,
    useragent: req.get("User-Agent")
  });
  next();
});
// print error message in json format
app.get("/", async (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Hi, this is a cabul API!",
    container: "https://github.com/sinkaroid/cabul/tree/proxy",
    version: `v${pkg.version}`,
    endpoint: "/reddit?subreddit=<subreddit>",
  });

});

// ! Route Imports
fs.readdir(path.join(__dirname, "routes"), (err, files) => {
  const r: unknown[] = [];
  files.forEach(file => {
    if (file.endsWith("ts")) return;
    const pathstring = path.join(__dirname, "routes", file);
    const { handler, paths } = require(pathstring);
    r.push({ handler, paths });
  });
  r.forEach(route => {
    app.use(route.paths, route.handler);
  });
});

app.listen(constants.port, () => Logger.info(`Listening on port ${constants.port}`));

module.exports = app;
