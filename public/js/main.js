'use strict';


var url = window.location;
var userDatabase = document.querySelector('.select-user-input');


function getRequest(addition, callback) {
  var myRequest = new XMLHttpRequest();
  myRequest.open('GET',url + addition);
  myRequest.setRequestHeader('Content-Type', 'application/json');
  myRequest.send();
  console.log(myRequest);
  myRequest.onreadystatechange = function() {
    if (myRequest.readyState === 4) {
      callback(myRequest.response);
      console.log(myRequest.response);
    }
  };
}


function userSelection(response) {
  var usersArray = JSON.parse(response);
  usersArray.forEach(function(oneuser) {
    var listelement = document.createElement('option');
    listelement.innerHTML = oneuser.user_name;
    userDatabase.appendChild(listelement);
  });
}
getRequest('db/users', userSelection);
