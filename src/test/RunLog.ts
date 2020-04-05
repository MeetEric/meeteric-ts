import { Logger, LogLevels } from "../telemetry";
import { Telemetry } from "..";

Telemetry.Configuration.Initialize(LogLevels.Verbose);
Logger.Trace("Trace message");
Logger.Warn("Warn message", { Id : 123});
Logger.Error("Error message", { Id : 123});