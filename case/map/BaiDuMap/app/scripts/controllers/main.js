'use strict';

/**
 * @ngdoc function
 * @name baidumapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baidumapApp
 */
angular.module('baidumapApp')
    .controller('poiController',function ($scope, $http) {
        $http.get("data/data.json")
            .success(function(response) {$scope.poi_data = response.poi_data;});
    });

