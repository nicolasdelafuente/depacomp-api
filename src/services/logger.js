const winston = require('winston');
const { createLogger, transports, format } = winston;
const path = require('../paths');

const logger = createLogger({
  transports: [
    //new transports.Console(),
    new transports.File({ filename: `${path.LOGS}/logError.log`})
  ],
  format: format.combine(
    format.timestamp(),
    format.json()
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