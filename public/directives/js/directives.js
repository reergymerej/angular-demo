(function () {
  'use strict';

  angular.module('directives-demo').

  directive('date', function () {
    return {
      restrict: 'E',

      scope: {
        dateFormat: '@?format',
        interval: '@?interval'
      },

      controller: ['$scope', function ($scope) {
        $scope.date = new Date();
      }],

      templateUrl: '/directives/templates/date.html',

      link: function (scope, iElement, iAttrs, controller, transcludeFn) {

        scope.dateFormat = scope.dateFormat || 'medium';
        scope.interval = (parseInt(scope.interval, 10) || 1) * 1000;

        setInterval(function () {
          scope.date = new Date();

          // Since we changed the scope's value without Angular
          // knowing, we have to trigger the digest loop with $apply.
          scope.$apply();
        }, scope.interval);
      }
    };
  });

}());