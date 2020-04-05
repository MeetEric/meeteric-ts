import winston = require('winston');
import format = winston.format;
import { Format } from 'logform';
import { Logger } from './Logger';

export enum LogLevels {
    Error = "error",
    Warn = "warn",
    Trace = "info",
    Info = "info",
    Verbose = "verbose",
    Debug = "debug"
}

export class Configuration {

    public static Initialize(logLevel: LogLevels = LogLevels.Trace) {
        const logger = winston.createLogger({
            level: logLevel,
            transports: [
                new winston.transports.Console({
                    format: winston.format.colorize()
                })
            ],
            format: format.combine(
                format.colorize(),
                format.simple()
            )
        });

        Logger.RegisterLogger(logger);
    }
}