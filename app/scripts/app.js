'use strict';

/**
 * @ngdoc overview
 * @name citiesApp
 * @description
 * # citiesApp
 *
 * Main module of the application.
 */
angular
  .module('citiesApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainControl'
      })
      .when('/citiesList', {
        templateUrl: 'views/citiesList.html',
        controller: 'CitiesListControl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutControl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactControl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
