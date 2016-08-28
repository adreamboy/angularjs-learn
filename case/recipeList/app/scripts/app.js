'use strict';

/**
 * @ngdoc overview
 * @name guthubApp
 * @description
 * # guthubApp
 *
 * Main module of the application.
 */

// 自定义指令
var directives = angular.module('guthubApp.directives', []);

directives.directive('butterbar', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element) {
                element.addClass('hide');

                $rootScope.$on('$routeChangeStart', function() {
                    element.removeClass('hide');
                });

                $rootScope.$on('$routeChangeSuccess', function() {
                    element.addClass('hide');
                });
            }
        };
    }]);

directives.directive('focus',
    function() {
        return {
            link: function(scope, element) {
                element[0].focus();
            }
        };
    });
