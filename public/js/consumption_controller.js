'use strict';

app.controller('myController', function($scope, $http) {
  $http.get(url + '/db/consumption').then(function(response) {
    $scope.consumptions = response.data;
  }, function (err) {
    $scope.errorCallback = error;
  });
});
