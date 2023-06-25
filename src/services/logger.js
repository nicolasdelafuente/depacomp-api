const winston = require('winston');
const { createLogger, transports, format } = winston;
const path = require('../paths');
const moment = require('moment-timezone');

const logger = createLogger({
  transports: [
    //new transports.Console(),
    new transports.File({ filename: `${path.LOGS}/logError.log`})
  ],
  format: format.combine(
    format.timestamp(),
    format.printf(info => {
      const timestamp = moment(info.timestamp).tz('America/Argentina/Buenos_Aires').format('YYYY-MM-DD HH:mm:ss');
      return `${timestamp} ${info.level}: ${info.message}`;
    })
  )
});

const handleErrors = (error, functionName, entityName) => {
  logger.error(`Error en la función '${functionName}' de la entidad ${entityName}: ${error.message}`);
  logger.error(`Consulta SQL: ${error?.sql ?? 'No disponible'}`)

  return {
    message: `Error en la función '${functionName}' de la entidad ${entityName}`,
    error: error.message
  };
}

module.exports = {
  handleErrors: handleErrors,
  logger: logger
};