const mainController = {
    index: function (req, res) {
        app.get('/', (req,res) => {res.render("index")}
        );
    },
};

module.exports = mainController;