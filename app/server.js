const express = require('express');
const app = express();
const { connection } = require('./database/db');
const routes = require('./routes');
const cors = require('cors')

// Setting
const PORT = process.env.PORT || 4000;
const ROUTE = process.env.Route
const WHITELIST = process.env.WHITELIST;

app.use(cors({
    "Access-Control-Allow-Origin": WHITELIST,
    "optionsSuccessStatus": 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas

app.use(ROUTE,routes);

// Arrancamos el servidor
// TRUE dropea todo
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);
    connection.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión");
    })
});