const { Router } = require("express");

const indexController = {
    index: function (req, res) {
        app.get('/', (req,res) => {res.render("index")}
        );
    },
};

module.exports = indexController