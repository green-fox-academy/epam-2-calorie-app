'use strict';

describe('userlisting check', function () {

  beforeEach(module('users'));

  var $controller, $httpBackend;

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', '/db/users').respond([{}]);
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('userlisting', function () {
        it('should give an array', function () {
            var $scope = {};
            $httpBackend.expectGET('/db/users');
            var controller = $controller('UserList', { $scope: $scope });
            $httpBackend.flush();
            expect($scope.userData.length).toBe(1);
        });
    });

});
