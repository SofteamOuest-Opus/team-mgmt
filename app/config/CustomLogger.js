const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, printf} = format;

export default () => {
    //création du format de log
    const myFormat = printf(info => {
        const loggerStr = info.logger ? info.logger : '';
        const codeStr = info.code ? info.code : '';
        const correlationIdStr = info.correlationId ? info.correlationId : '';
        const messageIdStr = info.message ? info.message : '';
        const stackTraceIdStr = info.stackTrace ? info.stackTrace : '';
        return `${info.timestamp}-${info.level}-${loggerStr}-${codeStr}-${correlationIdStr}-${messageIdStr}-${stackTraceIdStr}`;
    });

    //création du logger sur la console
    const logger = createLogger({
        format: combine(timestamp(), myFormat),
        transports: [new transports.Console()]
    });

    return logger;
}