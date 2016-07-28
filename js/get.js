var linkifyStr = require('linkifyjs/string');
var moment = require('moment');

module.exports = function () {
function getRandom() {
  var shoutout = new XMLHttpRequest();
  shoutout.open('GET', 'https://randomuser.me/api/');
  shoutout.onload = function() {
    var objectForm = JSON.parse(shoutout.responseText);
    getRandom(function (person) {
      var pictures = document.getElementById('textBox');
      var pic = pictures.setAttribute('src', person.results[0].user.picture.thumbnail);
    });
    //callMe(objectForm);
  };
  shoutout.send();
}; // end getRandom
}; // end module.exports
//window.addEventListener('load', function () {
//    getRandom(function (person) {
//        var pictures = document.getElementById('textBox');
//        var pic = pictures.setAttribute('src', person.results[0].user.picture.medium);
//    });
//});

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
            parent.appendChild(chatOutput).innerHTML = moment(data[i].when).format('LT') + ' [' + data[i].user.toUpperCase() + '] ' + linkifyStr(data[i].message);
        } //end for
        console.log(data[i]);
    };
    request.send();
 };
};