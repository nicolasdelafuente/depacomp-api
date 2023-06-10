require('dotenv').config();

const path = require('../src/paths');
const BaseControllerTest = require(`${path.TESTS}/baseControllerTest.js`);

const ROUTE     = process.env.Route || '/depacomp-api';
const VERSION   = process.env.VERSION || '/v1';

const route = `${ROUTE}${VERSION}/paises`;
const controllerName = 'Paises';
const singularName = 'Pais';


const generoControllerTest = new BaseControllerTest(route);
generoControllerTest.runTests(controllerName, singularName, 'nombre');