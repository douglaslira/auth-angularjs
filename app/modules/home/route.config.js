(function () {
    'use strict';

    angular.module('app.home').config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    function config($urlRouterProvider, $stateProvider) {

        $stateProvider.state('app.home', {
            url: '/',
            views: {
                'content@app': {
                    controller: 'HomeController',
                    templateUrl: '/js/home/views/home.html'
                }
            }
        });

        $urlRouterProvider.otherwise('/');

    }

})();
