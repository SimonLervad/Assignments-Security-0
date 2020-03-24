const express = require('express');
const router = express.Router();
const handler = require("../models/handler");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Fragments of the World',
        subtitle: 'Playing with the World'
    });
});

module.exports = router;
