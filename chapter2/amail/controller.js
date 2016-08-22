/**
 * Created by zq199 on 2016/8/22.
 */

// 为核心的AMail服务创建模块
var aMailServices = angular.module('AMail',[]);
// 在URL、模板和控制器之间建立映射关系
function emailRouterConfig($routeProvider){
    $routeProvider
        .when('/',{
            controller: ListController,
            templateUrl:'list.html'
        })
        .when('/view/:id',{
        controller: DetailController,
        templateUrl:'detail.html'
        })
        .otherwise({
            redirectTo: '/'
        });
        // 注意，为了创建详情视图，我们在id前面加了一个冒号，从而指定一个参数化的URL组件

}
// 配置我们的路由，以便AMail服务能够找到它
aMailServices.config(emailRouterConfig);

// 一些虚拟的邮件
messages = [
    {
        id: 0,
        sender: 'jean@somecompany.com',
        subject: 'Hi there ,old friend',
        date: 'Dec 7,2013 12:32:00',
        recipients: ['greg@somecompany.com'],
        message: 'Hey , we should get together for '
    },
    {
        id: 1,
        sender: 'maria@somecompany.com',
        subject: 'Hi there ,old friend',
        date: 'Dec 7,2013 18:32:00',
        recipients: ['greg@somecompany.com'],
        message: 'Hey , we should get together for '
    },
    {
        id: 2,
        sender: 'bill@somecompany.com',
        subject: 'Hi there ,old friend',
        date: 'Dec 6,2013 20:32:00',
        recipients: ['greg@somecompany.com'],
        message: 'Hey , we should get together for '
    }
];
// 把我们的邮件发布给邮件的列表模板
aMailServices.controller('ListController',
    function($scope) {
        $scope.messages =messages;
    });
// 从路由信息（从URL中解析出来的）中获取邮件的id,然后用它找到正确的邮件对象
aMailServices.controller('DetailController',function ($scope,$routeParams) {
   $scope.message = messages[$routeParams.id];
});

// Publish our messages for the list template
// function ListController($scope) {
//     $scope.messages = messages;
// }
//
// // Get the message id from the route (parsed from the URL) and use it to
// // find the right message object.
// function DetailController($scope, $routeParams) {
//     $scope.message = messages[$routeParams.id];
// }