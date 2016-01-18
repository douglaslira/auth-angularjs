(function(){
    'use strict';

    angular.module('app.auth').factory('AuthService', AuthService);

    AuthService.$inject = ['$http', 'SessionService'];

    function AuthService($http, SessionService) {

        var authService = {
            login: function (credentials) {
                return $http.post('/login', credentials).then(function (res) {
                    SessionService.create(res.data.id, res.data.user.id, res.data.user.role);
                    return res.data.user;
                });
            },
            isAuthenticated: function () {
                return !!SessionService.userId;
            },
            isAuthorized: function (authorizedRoles) {
                if (!angular.isArray(authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                }
                return (authService.isAuthenticated() && authorizedRoles.indexOf(SessionService.userRole) !== -1);
            }
        };

        return authService;

    }

})();