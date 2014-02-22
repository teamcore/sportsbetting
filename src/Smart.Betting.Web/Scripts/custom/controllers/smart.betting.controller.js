smartapp.controller('authctrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('login');
}]);