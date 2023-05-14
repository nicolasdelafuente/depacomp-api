const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');
//para usar todas las rutas para swagger
const path = require('path');

const ROUTE    = process.env.ROUTE || '/depacomp-api';
const VERSION  = process.env.VERSION || '/v1';
const PORT     = process.env.PORT || 4000;


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: `Depacomp API ${ROUTE}${VERSION}`,
            version: '1.0.0'
        },
        servers: [
            {
                url:`http://localhost:${PORT}${ROUTE}${VERSION}`
            }
        ],
        //Para que aparezca en Swagger el Authorize con las opciones
        basePath: '/',
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        }
        // hay que ponerlo o sacarlo para que se activen en todas las APIs
        //security: [{
        //    bearerAuth: []
        //}]
    },
    apis: [`${path.join(__dirname, `./${VERSION}/*.js`)}`],
};


const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    //Ruta de la documentacion
    app.use(`${ROUTE}${VERSION}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    //Ruta de la documentacion en formato JSON
    app.get(`${ROUTE}${VERSION}/docs.json`, (req,res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log(`${VERSION} de los documentos esta en: http://localhost:${port}${ROUTE}${VERSION}/docs`);
};

module.exports = { swaggerDocs }


