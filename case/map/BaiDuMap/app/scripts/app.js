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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/map_config', {
        templateUrl: 'views/map_config.html',
        controller: 'MapConfigCtrl',
        controllerAs: 'mapConfig'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
// $(function () {
//     function initialize() {
//         var map = new BMap.Map("map");          // 创建地图实例
//         var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
//         map.centerAndZoom(point, 15);
//     }
//
//     function loadScript() {
//         var script = document.createElement("script");
//         script.src = "http://api.map.baidu.com/api?v=2.0&ak=V5YM1CIwjDz2OEFTs4EAoPpv";//此为v2.0版本的引用方式
//         document.body.appendChild(script);
//         initialize()
//     }
//
//     window.onload = loadScript;
// });