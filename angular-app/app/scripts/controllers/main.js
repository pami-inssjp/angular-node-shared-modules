'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', ['$scope','validatorService', function ($scope, validatorService) {

    $scope.message = validatorService().getMessage();

    console.log($scope.message);


 }]);
