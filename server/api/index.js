const express = require('express');

const Router = express.Router();
//here you can make as many router as you want
Router.get('/', (req, res, next) => {
    res.json({
        name: "Router Section For an application"
    })

});


module.exports = Router;