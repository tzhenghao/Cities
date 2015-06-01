'use strict';

/**
 * @ngdoc function
 * @name citiesApp.controller:MainCtrl
 * @description
 * # MainControl
 * Controller of the citiesApp
 */
angular.module('citiesApp')
  .controller('MainControl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
