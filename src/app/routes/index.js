const express = require("express");
const fs = require("fs");
const router = express.Router();

const ROUTEVERSION = process.env.ROUTEVERSION || '/v1';
const PATH_ROUTES = `${__dirname}${ROUTEVERSION}`;

const removeExtension = (filename) => {
    return filename.split('.').shift();
}
fs.readdirSync(PATH_ROUTES).filter( file => {
    const name = removeExtension(file);

    router.use(`/${name}`, require(`.${ROUTEVERSION}/${file}`));
    
});

module.exports = router;