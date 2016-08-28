'use strict';

/**
 * @ngdoc function
 * @name guthubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guthubApp
 */
var app = angular.module('guthubApp',
    [
        'guthubApp.directives',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ]);
var recipes = [
    {
        id:0,
        title:"First Recipe",
        description:"Delicious, crisp on the outside,chewy",
        ingredients:[
            {
                amount:0,
                amountUnits: "packet",
                ingredientName: "Chips Ahoy"
            },
            {
                amount:1,
                amountUnits: "packet",
                ingredientName: "Chips Ahoy"
            }

        ],
        instructions:"1.Go buy a pocket of Chips Ahoy"
    },
    {
        id: 1,
        title:"Second Recipe",
        description:"Delicious, crisp on the outside,chewy",
        ingredients:[
            {
                amount:0,
                amountUnits: "packet",
                ingredientName: "Chips Ahoy"
            }
        ],
        instructions:"1.Go buy a pocket of Chips Ahoy"
    }

];
app.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        controller: 'ListCtrl',
        templateUrl:'/views/list.html'
    }).when('/edit/:id', {
        controller: 'EditCtrl',
        templateUrl:'/views/recipeForm.html'
    }).when('/view/:id', {
        controller: 'ViewCtrl',
        templateUrl:'/views/viewRecipe.html'
    }).when('/new', {
        controller: 'NewCtrl',
        templateUrl:'/views/recipeForm.html'
    }).otherwise({redirectTo:'/'});
});

app.controller('ListCtrl',
    function($scope) {
        $scope.recipes = recipes;
    });
app.controller('ViewCtrl',
    function($scope, $location,$routeParams) {
        $scope.recipes = recipes;
        $scope.recipe = $scope.recipes[$routeParams.id];

        $scope.edit = function() {
            $location.path('/edit/' + recipes[$routeParams.id].id);
        };
    });

app.controller('EditCtrl',
    function($scope, $location,$routeParams) {
        $scope.recipes = recipes;
        $scope.recipe = $scope.recipes[$routeParams.id];

        $scope.save = function() {
            $scope.recipes= recipes;
            $location.path('/view/' + $scope.recipes[$routeParams.id].id);
        };

        $scope.remove = function() {
            delete $scope.recipe;
            $location.path('/');
        };
        $scope.ingredients = $scope.recipe.ingredients;
        $scope.addIngredient = function() {
            var ingredients = $scope.ingredients;
            ingredients[ingredients.length] = {};
        };
        $scope.removeIngredient = function(index) {
            $scope.ingredients.splice(index, 1);
        };
    });

app.controller('NewCtrl',
    function($scope, $location) {
        $scope.recipes = recipes;
        $scope.recipe = {ingredients:[{}]};
        $scope.save = function() {
            $scope.recipe.ingredients = $scope.ingredients;
            $scope.recipes.push($scope.recipe);
            // $scope.recipe = [];
            $location.path('/view/' + $scope.recipe.id);
        };
        $scope.ingredients = [{}];
        $scope.addIngredient = function() {
            var ingredients = $scope.ingredients;
            ingredients[ingredients.length] = {};
        };
        $scope.removeIngredient = function(index) {
            $scope.ingredients.splice(index, 1);
        };
    });

// app.controller('IngredientsCtrl',
//     function($scope) {
//         $scope.ingredients = $scope.recipe.ingredients;
//         $scope.addIngredient = function() {
//             var ingredients = $scope.ingredients;
//             ingredients[ingredients.length] = {};
//         };
//         $scope.removeIngredient = function(index) {
//             $scope.ingredients.splice(index, 1);
//         };
//     });