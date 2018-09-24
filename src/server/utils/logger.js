import bunyan from "bunyan";

const { APP_NAME: name } = process.env;

const logger = bunyan.createLogger({ name });

export default logger;
