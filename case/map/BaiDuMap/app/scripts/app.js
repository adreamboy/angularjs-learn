'use strict';

/**
 * @ngdoc overview
 * @name baidumapApp
 * @description
 * # baidumapApp
 *
 * Main module of the application.
 */
angular
  .module('baidumapApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/map_config', {
        templateUrl: 'views/map_config.html',
        controller: 'MapConfigCtrl',
        controllerAs: 'mapConfig'
      })
      .otherwise({
        redirectTo: '/'
      });
  });