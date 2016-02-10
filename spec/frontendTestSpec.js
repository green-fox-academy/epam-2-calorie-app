'use strict';

describe('userlisting check', function () {

  beforeEach(module('users'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('userlisting', function () {
        it('should give an array', function () {
            var $scope = {};
            var controller = $controller('UserList', { $scope: $scope });
            expect($scope.userData.length).not.toBeNull();
        });
    });

});

describe('calculator', function () {

  beforeEach(module('calculatorApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sum', function () {
        it('1 + 1 should equal 2', function () {
            var $scope = {};
            var controller = $controller('CalculatorController', { $scope: $scope });
            $scope.x = 1;
            $scope.y = 2;
            $scope.sum();
            expect($scope.z).toBe(3);
        });
    });

});
