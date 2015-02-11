var express = require('express');
var router = express.Router();
var shortener = require('../my_modules/shortener');
var os = require('os');
var hostname = os.hostname();

function shorten(req) {
    var id = shortener.shortenURL(req.body.url);
    var shortened = hostname + id;
    return shortened;
}

router.post('/shorten', function (req, res, next) {
    res.render('shortenedURL', {id: id, url: shorten(req)});
});

router.post('/api/shorten', function (req, res, next) {
    res.set('Content-Type', 'text/plain');
    res.send(shorten(req));
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
