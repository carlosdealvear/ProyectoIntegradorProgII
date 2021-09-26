const data = require('../module/users')

const userController = {
    index: function (req, res) {
        return res.send(data.porNombre);
    },
};

module.exports = userController;

