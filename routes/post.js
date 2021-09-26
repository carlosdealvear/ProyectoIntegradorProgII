var express = require('express');
const { post } = require('../app');
var router = express.Router();
const postController = require('../controllers/postController'); 
const posts = require('../module/posteos');

router.get('/', postController.index);

/*Get user listing. */
router.get('/post/:post', function (req, res, next){
    let post = req.params.posts; 
    let posteos = posts.porId(posts)
    if (posts.length > 0) {
        res.send(posteos)
    } else{
        res.send('no hay un posteo ' + posts)
    }
    ;
}); 


module.exports = router;