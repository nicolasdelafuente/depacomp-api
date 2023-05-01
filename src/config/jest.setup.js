const request = require('supertest');
const app = require('../../app'); // Importar el archivo principal de la aplicación

global.app = app;
global.request = request;