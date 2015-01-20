(function () {
  'use strict';

  angular.module('directives-demo').

  directive('date', function () {
    return {
      restrict: 'E',

      controller: ['$scope', function ($scope) {
        $scope.date = new Date();

        setInterval(function () {
          $scope.date = new Date();
        }, 1000);
      }],

      templateUrl: '/directives/templates/date.html'
    };
  });

}());