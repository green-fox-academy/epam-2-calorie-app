'use strict';
var app = angular.module('myApp', []);

app.controller('abc', ['$scope', function($scope) {
	$scope.string = 'Green fox';
}]);
