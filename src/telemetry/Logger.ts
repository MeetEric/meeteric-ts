import winston = require('winston');

export class Logger {
  private static logger: winston.Logger;

  public static Trace<T>(context: string, payload?: T) {
    this.GetLogger().info(context, payload);
  }

  public static Error<T>(context: string, payload: T) {
    this.GetLogger().error(context, payload);
  }

  public static Warn<T>(context: string, payload: T) {
    this.GetLogger().warn(context, payload);
  }

  public static RegisterLogger(logger: winston.Logger) {
    this.logger = logger;
  }

  private static GetLogger(): winston.Logger {
    return this.logger;
  }
}
