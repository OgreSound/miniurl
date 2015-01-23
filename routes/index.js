var express = require('express');
var router = express.Router();
var shortener = require('../my_modules/shortener');

router.post('/shorten', function (req, res, next) {
    var id = shortener.shortenURL(req.body.url);
    var shortened = "whispering-cliffs-6948.herokuapp.com/" + id;

    res.render('shortenedURL', {id: id, url: shortened});
});

router.post('/api/shorten', function (req, res, next) {

    var id = shortener.shortenURL(req.body.url);
    var shortened = "whispering-cliffs-6948.herokuapp.com/" + id;
    res.set('Content-Type', 'text/plain');
    res.send(shortened);
});

router.get('/:id', function (req, res, next) {

    var url = shortener.getURL(req.params.id);
    console.log("trying to redirect " + "to " + req.params.id);
    if (url != undefined) {
        console.log(req.params.id + ' now redirects permanently to ' + url);
        res.redirect(301, url);
    } else {
        next()
    }
});

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.json({ message: 'hooray! welcome to our api!' });
    res.render('index');
});


module.exports = router;
