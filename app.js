require('dotenv').config();

const express = require('express');
const app = express();
const { connection } = require('./src/app/database/db');
const routes = require('./src/app/routes');
const cors = require('cors')

const { swaggerDocs } = require('./src/app/routes/swagger')

const PORT          = process.env.PORT || 4000;
const ROUTE         = process.env.Route || '/depacomp-api';
const ROUTEVERSION  = process.env.ROUTEVERSION || '/v1';
const WHITELIST     = process.env.WHITELIST || ['http://localhost:3000'];


app.use(cors({
    "Access-Control-Allow-Origin": WHITELIST,
    "optionsSuccessStatus": 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(`${ROUTE}${ROUTEVERSION}`, routes);

// Arranque Servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);
    
    // TRUE dropea todo
    connection.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión");
        swaggerDocs(app, PORT);
    })
});