/**
 * Created by aleksi on 16.1.15.
 */

var count = 100000000000;
var charArray =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

var urlDict = [];

exports.shortenURL = function shortenURL(url) {
    count++;
    console.log(count + "th url to be shortened");
    var result = '';
    var c = count;
    do {
        var division = Math.floor(c / 62);
        var index = c - division * 62;
        var newChar = charArray[index];
        c = division;
        result += newChar;
    } while (division > 0);

    urlDict[result] = url;
    return result;
};

exports.getURL = function getURL(id) {

};

