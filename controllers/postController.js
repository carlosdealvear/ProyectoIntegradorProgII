const data = require('../module/posteos')

const postController = {
    index: function (req, res) {
        return res.send(data.posts);
    },
    show: function (req, res) {
        let id = req.params.id;
        let resultado = '';

        if(id > data.posts.length){
            resultado = 'no tenemos'
            return res.send(resultado)
        }   else{
                for (let index = 0; index < data.posts.length; i++) {           
                    if (condition) {
                        
                    }
                    
                }
        }

        return res.send(data.posts);
    },
};

module.exports = postController;