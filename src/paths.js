const path = require('path');

module.exports = {
  APP: path.join(__dirname, 'app.js'),
  CONTROLLERS: path.join(__dirname, 'app', 'controllers'),
  DATABASE: path.join(__dirname, 'app', 'database'),
  MODELS: path.join(__dirname, 'app', 'models'),
  ROUTES: path.join(__dirname, 'app', 'routes'),
  CONFIG: path.join(__dirname, 'config')
};