(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var update = require('./get');
var send = require('./send');

window.addEventListener('load', function () {
    console.log('the page is loaded');
    update();
    send();

    document.getElementById('update').addEventListener('click', update());
    document.getElementById('send').addEventListener('click', send());

});
},{"./get":2,"./send":3}],2:[function(require,module,exports){
module.exports = function () {    
    var intervalID = window.setInterval(myCallback, 5000);
    function myCallback() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://chat.queencityiron.com/messages');
    request.onload = function() {
        var parent = document.getElementById("textBox"); 
        parent.innerHTML = '';
        
        var data = JSON.parse(request.responseText);
        for (var i = 0; i < data.length; i++) {
            var chatOutput = document.createElement('p');
            chatOutput.textContent = data[i];
            parent.appendChild(chatOutput).innerHTML = '[' + data[i].user + ']' + ': ' + data[i].message;
        } //end for
        console.log(data[i]);
    };
    request.send();
 };
};
},{}],3:[function(require,module,exports){
module.exports = function () {
    var gtButton = document.getElementById('send');
        gtButton.addEventListener('click', function() {
        var request = new XMLHttpRequest();
    request.open('POST', 'http://chat.queencityiron.com/messages');
    request.send(JSON.stringify({
        name: document.getElementById('user').value,
        message: document.getElementById('message').value,
    }));
});
};
},{}]},{},[1])