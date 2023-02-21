const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');

const ROUTE         = process.env.ROUTE;
const ROUTEVERSION  = process.env.ROUTEVERSION || '/v1';
const path = `src/app/routes${ROUTEVERSION}`;
console.log(path);

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
    apis: [
        `${path}/carreras.routes.js`,
    ]
};


const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {

    app.use(
        `./src/app/routes/`,
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec)
    );

    app.get(`./src/app/routes//docs.json`, (req,res) => {
        res.header('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log(`Version 1 Docs at http://localhost:${port}${ROUTE}/doc.js`);
};

module.exports = {swaggerDocs}


