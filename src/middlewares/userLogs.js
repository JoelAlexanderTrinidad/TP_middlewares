const fs = require('fs');
const path = require('path');

// El usuario ingresó a la ruta: _______

// este es un middleware de app, por eso no lo tenemos que aplicar en una sola ruta
const userLogs = (req, res, next) => {
   /*  console.log(req.url); */ // cada vez que entremos a una ruta se imprime la url a la que se está entrando, esto lo usamos para escribir en el txt
    fs.appendFileSync(path.resolve(__dirname, '..', 'logs', 'userLogs.txt'),"El usuario ingresó a la ruta: "+ req.url + '\n') // writeFileSync escribe y sobre escribe. appendFileSync agrega
    next();
}

module.exports = userLogs;