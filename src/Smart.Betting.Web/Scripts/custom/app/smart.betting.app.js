var smartapp = angular.module("smartapp", []);

smartapp.config(['$router', function ($router) {
    $router.when('login', {
        templateUrl: 'Home/Login.html',
        controller: 'authctrl'
    }).otherwise({
        redirectTo: '/'
    });
}]);