var smartCtrls = angular.module('smartCtrls', [])

smartCtrls.controller('homeCtrl', ['$scope', function ($scope) {
    $scope.Greetings = "Welcome To Smart Betting!";
}]);

smartCtrls.controller('loginCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    $scope.Login = {};

    $scope.reset = function () {
        $scope.Login = { };
    };

    $scope.update = function (login) {
        $scope.Login = login;
        $location.path('/');
    };

    $scope.cancel = function () {
        $scope.reset();
        $location.path('/');
    };

    $scope.isDirty = function (login) {
        return angular.equals(login, $scope.Login);
    };
}]);
