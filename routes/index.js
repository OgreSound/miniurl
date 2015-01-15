var express = require('express');
var router = express.Router();


router.get('/:id', function (req, res, next) {
    console.log('redirecting permanently');
    //res.send('stuff');
    res.redirect(301, 'http://reaktor.fi/careers/summerjob/');
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'OgreSound\'s url minifier'});
});


module.exports = router;
