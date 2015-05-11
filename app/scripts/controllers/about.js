'use strict';

/**
 * @ngdoc function
 * @name citiesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the citiesApp
 */
angular.module('citiesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
