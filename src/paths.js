const path = require('path');

module.exports = {
  APP: path.join(__dirname, 'app.js'),
  CONTROLLERS: path.join(__dirname, 'app', 'controllers'),
  DATABASE: path.join(__dirname, 'app', 'database'),
  LOGS: path.join(__dirname, 'app', 'logs'),
  MODELS: path.join(__dirname, 'app', 'models'),
  ROUTES: path.join(__dirname, 'app', 'routes'),
  SERVICES: path.join(__dirname, 'services'),
  CONFIG: path.join(__dirname, 'config'),
  TESTS: path.join(__dirname, 'tests'),
};