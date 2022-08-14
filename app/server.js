const express = require('express');
const app = express();
const { connection } = require('./database/db');
const routes = require('./routes');
const cors = require('cors')

// Setting
const PORT = process.env.PORT || 4000;

app.use(cors());
const whiteList = process.env.WHITELIST;

app.use(cors({
    "Access-Control-Allow-Origin": whiteList,
    "optionsSuccessStatus": 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use("/depacomp-api/v1",routes);

// Arrancamos el servidor
// true dropea todo
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);
    connection.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión");
    })
});