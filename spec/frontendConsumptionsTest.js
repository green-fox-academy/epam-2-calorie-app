'use strict';

describe('consumptionListing check', function () {

  beforeEach(module('consumption'));

  var $controller, $httpBackend;

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', '/db/consumption').respond([{}]);
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('consumptionListing', function () {
        it('should give an array', function () {
            var $scope = {};
            $httpBackend.expectGET('/db/consumption');
            var controller = $controller('consumptionListController', { $scope: $scope });
            $httpBackend.flush();
            expect($scope.consumptions.length).toBe(1);
        });
    });

});

describe('consumption delete check', function () {

  beforeEach(module('consumption'));

  var $controller, $httpBackend;

  beforeEach(inject(function(_$controller_, _$httpBackend_){
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', '/db/consumption').respond([{cons_id: 1}]);
    $httpBackend.when('DELETE', '/db/consumption/:id');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('consumptionListing', function () {
        it('should give an array', function () {
            var $scope = {};
            $httpBackend.expectGET('/db/consumption');
            var controller = $controller('consumptionListController', { $scope: $scope });
            $httpBackend.flush();
            console.log($scope.consumptions);
            expect($scope.consumptions.length).toBe(1);

            $httpBackend.expectDELETE('/db/consumption/1').respond({});
            var controller = $controller('consumptionDelete', { $scope: $scope });
            $scope.delItem(1);
            $httpBackend.flush();
            expect($scope.consumptions.length).toBe(0);
        });
    });

});
