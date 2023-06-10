require('dotenv').config();

const path = require('../../paths');
const BaseControllerTest = require(`${path.TESTS}/baseControllerTest.js`);

const ROUTE     = process.env.Route || '/depacomp-api';
const VERSION   = process.env.VERSION || '/v1';

const route = `${ROUTE}${VERSION}/documentoTipos`;
const controllerName = 'DocumentoTipos';
const singularName = 'DocumentoTipo';


const generoControllerTest = new BaseControllerTest(route);
generoControllerTest.runTests(controllerName, singularName, 'nombre');