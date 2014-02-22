var smartControllers = angular.module('smartControllers', [])

smartControllers.controller('homeController', ['$scope', '$http', function ($scope, $http) {
	$http.get('login');
}]);

smartControllers.controller('authController', ['$scope', '$http', function ($scope, $http) {
	$http.get('/');
}]);