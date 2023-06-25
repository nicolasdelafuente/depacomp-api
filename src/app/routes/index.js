const express = require("express");
const fs = require("fs");
const router = express.Router();

const VERSION = process.env.VERSION || '/v1';
const PATH_ROUTES = `${__dirname}${VERSION}`;

const removeExtension = (filename) => {
    return filename.split('.').shift();
}
fs.readdirSync(PATH_ROUTES).filter( file => {
    const name = removeExtension(file);

    router.use(`/${name}`, require(`.${VERSION}/${file}`));
    
});

module.exports = router;