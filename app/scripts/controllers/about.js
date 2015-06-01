'use strict';

/**
 * @ngdoc function
 * @name citiesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the citiesApp
 */
angular.module('citiesApp')
  .controller('AboutControl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
