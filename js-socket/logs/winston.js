const {createLogger, format, transports} = require("winston");
const winstonDaily = require("winston-daily-rotate-file");

const logDir = "logs";