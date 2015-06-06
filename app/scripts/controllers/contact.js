'use strict';

/**
 * @ngdoc function
 * @name citiesApp.controller:ContactControl
 * @description
 * # ContactControl
 * Controller of the citiesApp
 */
angular.module('citiesApp')
  .controller('ContactControl', function ($scope) {
  	$scope.message = 'If you have any questions/concerns, feel free to contact me';
    $scope.email = 'tanzhao@umich.edu';
  });
