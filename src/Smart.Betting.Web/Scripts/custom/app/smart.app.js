var smartapp = angular.module('smartapp', ['ngRoute', 'smartCtrls']);

smartapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'Views/home.html',
        controller: 'homeCtrl'
    }).when('/login', {
        templateUrl: 'Views/login.html',
        controller: 'loginCtrl'
    }).otherwise({
        redirectTo: '/'
    });
}]);