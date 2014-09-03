'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
