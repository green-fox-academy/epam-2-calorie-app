'use strict';

var app = angular.module('users', []);
app.controller('UserList', ['$scope', '$http', function($scope, $http) {
  $http.get('/db/users').then(function(response) {
    $scope.userData = response.data;
  });
}]);
