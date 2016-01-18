(function(){
    'use strict';

    angular.module('app.auth').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService'];

    function LoginController($scope, $rootScope, AUTH_EVENTS, AuthService){

        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.login = function (credentials) {
            AuthService.login(credentials).then(function (user) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                $scope.setCurrentUser(user);
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };

    }

})();