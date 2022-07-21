require('dotenv').config();

const DATABASE  = process.env.DB_NAME
const USERNAME  = process.env.DB_USERNAME
const PASSWORD  = process.env.DB_PASSWORD
const HOST      = process.env.DB_HOST
const DIALECT   = process.env.DB_DIALECT


module.exports = {
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  host: HOST,
  dialect: DIALECT,
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci', 
    // timestamps: false,
    // Genera claves foraneas de este tipo persona_id en vez de userId
    underscored: true,
  }
}
