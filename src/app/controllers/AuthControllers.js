const path = require('../../paths');
const { Usuario } = require(`${path.DATABASE}\\db`);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require(`${path.CONFIG}\\auth`);

module.exports = {

    // Login
    signIn(req, res) {
        let { email, password } = req.body;

        // Buscar usuario
        Usuario.findOne({
            where: {
                email: email
            }
        }).then(usuario => {
            if (!usuario) {
                res.status(404).json({ msg: "usuario con este correo no encontrado" });
            } else {
                // Existe usuario, comparar contraseñas.
                if (bcrypt.compareSync(password, usuario.password)) {

                             // Crear token
                    let token = jwt.sign({ usuario: usuario }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({
                        usuario: usuario,
                        token: token
                    })

                } else {
                    // Unauthorized Access
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }

            }

        }).catch(err => {
            res.status(500).json(err);
        })

    },

    // Registro
    signUp(req, res) {

        // Encriptamos la contraseña
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        // Crear un usuario
        Usuario.create({
            email: req.body.email,
            password: password
        }).then(usuario => {

            // Creamos el token
            let token = jwt.sign({ usuario: usuario }, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                usuario: usuario,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err);
        });

    }

}