const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');
//para usar todas las rutas para swagger
const path = require('path');

const ROUTE         = process.env.ROUTE;
const ROUTEVERSION  = process.env.ROUTEVERSION || '/v1';
//const path = `src/app/routes${ROUTEVERSION}`;

const options = {
    definition: {
        openapi: '3.0.0',
        into: {
            title: `Depacomp API ${ROUTEVERSION}`,
            version: '1.0.0'
        },
        /*
        servers: [
            {
                url:"http://localhost:4000"
            }
        ]
        */
    },
    apis: [`${path.join(__dirname, "./v1/*.js")}`],
    //apis: [`${path}/carreras.routes.js`,]
};


const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use(`${ROUTE}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get(`${ROUTE}/docs.json`, (req,res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log(`Version 1 Docs at http://localhost:${port}${ROUTE}/docs`);
};

module.exports = { swaggerDocs }


