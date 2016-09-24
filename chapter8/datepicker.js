angular.module('myApp.directives',[])
    .directive('datepicker',function () {
        return {
            //强制AngularJs把指令限定为只支持属性
            restrict: 'A',
            //总是和ng-model 配合使用
            require: '?ngModel',
            scope: {
                //此方法需要预先定义好，然后传递给视图控制器中的指令
                select: '&' //把我们所引用的select 函数绑定到右边的作用域中
            },
            link: function (scope,element,attrs,ngModel) {
                if(!ngModel) return;

                var optionsObj = {};

                optionsObj.dateFormat = 'mm/dd/yy'; //时间显示格式
                var updateModel = function (dateText) {
                    scope.$apply(function () {
                        //调用angularJS内部的工具更新双向绑定关系
                        ngModel.$setViewValue(dateText);
                    });
                };

                optionsObj.onSelect = function (dateText,picker) {
                    updateModel(dateText);
                    if(scope.select){
                        scope.$apply(function () {
                            scope.select({date: dateText});
                        });
                    }
                };
                ngModel.$render = function () {
                    //使用angularJs 内部的'binding-specific'变量
                    element.datepicker('setDate',ngModel.$viewValue || '');
                };
                element.datepicker(optionsObj);
            }
        };
    });