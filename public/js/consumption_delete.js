'use strict';



app.controller('myDelete', function($scope, $http) {
  $scope.delItem = function(item) {
    $http.delete(url + '/db/consumption/' + item).then(function(response) {
      for (var i = 0; i < $scope.consumptions.length; i++) {
        if ($scope.consumptions[i].cons_id === item) {
          $scope.consumptions.splice(i, 1);
        }
      }
    }, function (err) {
      $scope.errorCallback = error;
    });
  }
});
