const express = require('express');
const router = express.Router();
// también lo podemos hacer así 
// const router = require('express').express.Router();
const {index, contact, about, music, admin, login, noEntry} = require('../controllers/mainController');

const accessAdmin = require('../middlewares/accessAdmin');

router
    .get('/',index)
    .get('/contact', contact)
    .get('/about', about)
    .get('/music', music)
    .get('/admin', accessAdmin ,admin)
    .get('/login', login)
    .get('/no-entry', noEntry)



module.exports = router