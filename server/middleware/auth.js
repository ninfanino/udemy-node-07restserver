const jwt = require('jsonwebtoken');

// ********
// Verificar token
// ********

let checkToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token invalido"
                }
            })
        }

        req.usuario = decoded.usuario;
        next();

    });
}

let checkRoleUser = (req, res, next) => {
    let usuario = req.usuario;

    console.log(usuario.role)

    if (usuario.role === 'ADMIN_ROLE') {
        next();
        return;
    }

    return res.json({
        ok: false,
        err: {
            message: "El usuario no es administrador"
        }
    })
}

module.exports = {
    checkToken,
    checkRoleUser
}