'use strict';

/**
 * @ngdoc function
 * @name citiesApp.controller:CitiesListControl
 * @description
 * # CitiesListControl
 * Controller of the citiesApp
 */
angular.module('citiesApp')
  .controller('CitiesListControl', function ($scope) {
  	$scope.message = 'If you have any questions/concerns, feel free to contact me'
    $scope.email = 'tanzhao@umich.edu'
  });