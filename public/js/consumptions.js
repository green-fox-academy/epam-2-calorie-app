'use strict';

var app = angular.module('consumption', []);

app.controller('consumptionListController', function($scope, $http) {
  $http.get('/db/consumption').then(function(response) {
    $scope.consumptions = response.data;
  }, function (err) {
    $scope.errorCallback = err;
  });
});

app.controller('consumptionDelete', function($scope, $http) {
  $scope.delItem = function(item) {
    $http.delete('/db/consumption/' + item).then(function(response) {
      for (var i = 0; i < $scope.consumptions.length; i++) {
        if ($scope.consumptions[i].cons_id === item) {
          $scope.consumptions.splice(i, 1);
        }
      }
    }, function (err) {
      $scope.errorCallback = err;
    });
  };
});
