var update = require('./get');
var send = require('./send');
var moment = require('moment');
var linkifyStr = require('linkifyjs/string');

window.addEventListener('load', function () {
    console.log('the page is loaded');
    update();

    document.getElementById('send').addEventListener('click', send());
    moment();
    var str = '<p>For help with GitHub.com, please email support@github.com</p>';
    console.log(linkifyStr(str, {}));

});