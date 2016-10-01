var app = angular.module('myApp', []);

app.controller('ListCtrl', function($scope,$http) {
    $http.get('data.json').success(function(data) {
        $scope.poi_data = data;
        console.info('success');
    });
    $scope.orderProp = 'age';
});
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/list.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/list', {
            templateUrl: 'views/list.html',
            controller: 'ListCtrl',
            controllerAs: 'list'
        })
        .when('/university/:id',{
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
        })
        .when('/spot/:id',{
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
        })
        .when('/add', {
            templateUrl: 'views/add.html',
            controller: 'AddCtrl',
            controllerAs: 'edit'
        })
        .when('/others', {
            templateUrl: 'views/others.html',
            controller: 'OthersCtrl',
            controllerAs: 'others'
        })
        .otherwise({
            redirectTo: '/'
        });
});