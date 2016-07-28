var update = require('./get');
var send = require('./send');

window.addEventListener('load', function () {
    console.log('the page is loaded');
    update();
    document.getElementById('send').addEventListener('click', send());
});