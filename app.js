require('dotenv').config();
const path = require('./src/paths');

const express = require('express');
const app = express();
const { connection } = require(`${path.DATABASE}/db`);
const routes = require(`${path.ROUTES}`);
const cors = require('cors')

const { swaggerDocs } = require(`${path.ROUTES}/swagger`)

const PORT      = process.env.PORT || 4000;
const ROUTE     = process.env.Route || '/depacomp-api';
const VERSION   = process.env.VERSION || '/v1';
const WHITELIST = process.env.WHITELIST || ['http://localhost:3000'];


app.use(cors({
    "Access-Control-Allow-Origin": WHITELIST,
    "optionsSuccessStatus": 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(`${ROUTE}${VERSION}`, routes);

// Arranque Servidor
const server = app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    // TRUE dropea todo
    connection.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión");
        swaggerDocs(app, PORT);
    })
});


module.exports = server;
