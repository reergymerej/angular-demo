(function () {
  'use strict';

  angular.module('directives-demo').

  directive('date', function () {

    var addInterval = function (scope, iElement) {
      var intervalId;
      scope.interval = parseInt(scope.interval, 10);

      if (scope.interval) {
        intervalId = setInterval(function () {
          scope.date = new Date();

          // Since we changed the scope's value without Angular
          // knowing, we have to trigger the digest loop with $apply.
          scope.$apply();
        }, scope.interval * 1000);

        iElement.on('$destroy', function () {
          clearInterval(intervalId);
        });
      }
    };

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
        scope.dateFormat = scope.dateFormat || 'shortDate';
        addInterval(scope, iElement);
      }
    };
  });

}());