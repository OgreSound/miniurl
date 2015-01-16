var express = require('express');
var router = express.Router();
var shortener = require('../my_modules/shortener');


router.get('/:id', function (req, res, next) {
    console.log('redirecting permanently');
    //res.send('stuff');
    res.redirect(301, "http://reaktor.fi/careers/summerjob/");
});


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/shorten', function (req, res, next) {
    console.log(req.body.name);
    var id = shortener.shortenURL(req.body.name);
    var shortened = "minify.me/" + id;
    console.log("Shortened url: " + shortened);
    res.render('shortenedURL', {id: id, url: shortened});
});


module.exports = router;
