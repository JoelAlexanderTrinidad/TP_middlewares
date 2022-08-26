const admins = ['greta', 'ada', 'vin', 'tim'];

const accessAdmin = (req, res, next) => {
    
    /* return res.send(!admins.includes(req.query.user)) */
    if(!req.query.user || !admins.includes(req.query.user)){
        return res.redirect('/login');
    };
    // si admins incluye el usuario que está en el array, next()
    // sino redirige a la vista no-entry
    if(admins.includes(req.query.user.toLowerCase())){
        next();
    };
    
    return res.redirect('/no-entry');
}

module.exports = accessAdmin;