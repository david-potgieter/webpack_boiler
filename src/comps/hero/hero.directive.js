import angular from 'angular';

function selector() {
    return {
        restrict: 'E',
        scope: {
            name: '=',
        },
        template: '<h1>Hello, {{name}}</div>',
    };
}

export default angular.module('directives.selector', [])
.directive('selector', selector)
.name;
