'use strict';

/**
 * @ngdoc function
 * @name citiesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the citiesApp
 */
angular.module('citiesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
