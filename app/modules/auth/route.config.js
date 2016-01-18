(function () {
    'use strict';

    angular.module('app.auth').config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    function config($urlRouterProvider, $stateProvider) {

        $stateProvider.state('login', {
            noAuth: true,
            url: '/login',
            params: {
                returnState: '',
                returnParams: {}
            },
            controller: 'authController',
            controllerAs: 'vm',
            templateUrl: '/js/auth/views/login.html'
        });

        $urlRouterProvider.otherwise('/');

    }

})();
