import winston = require('winston');

export class Logger {
    private static logger: winston.Logger;

    public static Trace(context: string, payload: any = null) {
        this.GetLogger().info(context, payload);
    }

    public static Error(context: string, payload: any) {
        this.GetLogger().error(context, payload);
    }

    public static Warn(context: string, payload: any) {
        this.GetLogger().warn(context, payload);
    }

    public static RegisterLogger(logger: winston.Logger) {
        this.logger = logger;
    }

    private static GetLogger(): winston.Logger {
        return this.logger;
    }
}