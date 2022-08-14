const express = require('express');
const app = express();
const { connection } = require('./database/db');
const routes = require('./routes');

// Setting
const PORT = process.env.PORT || 3000;

// Middleware
// Para poder rellenar el req.body
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