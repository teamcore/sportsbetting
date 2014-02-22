var smartapp = angular.module("smartapp", ['ngRoute', 'smartControllers']);

smartapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'Views/Home/Login.html',
        controller: 'authctrl'
    }).otherwise({
        redirectTo: '/'
    });
}]);