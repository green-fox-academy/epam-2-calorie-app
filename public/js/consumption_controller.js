'use strict';

app.controller('myController', getConsumption);

function getConsumption($scope, $http) {
  $http.get(url + '/db/consumption').then(reqOk, reqErr);
}

function reqOk($scope, response) {
  $scope.consumptions = response.data;
}

function reqErr($scope, err) {
  $scope.errorCallback = err;
}
