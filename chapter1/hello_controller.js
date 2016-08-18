/**
 * Created by zq199 on 2016/8/18.
 */
var app = angular.module('myApp', []);
app.controller('HelloController', function($scope) {
    $scope.greeting = { text: 'Hello'}
});