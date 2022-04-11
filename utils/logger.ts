import winston from "winston";
import conf from "../constants";
const Logger = winston.createLogger({
  level: "info",
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({ filename: conf.log }),
    new winston.transports.File({ filename: conf.error, level: "error" }),
    new winston.transports.Console()
  ]
});

export default Logger;