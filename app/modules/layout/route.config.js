(function () {
    'use strict';

    angular.module('app.layout').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

        $stateProvider.state('app', {
            abstract: true,
            views: {
                '@': {
                    controller: 'RootController',
                    controllerAs: 'vm',
                    templateUrl: '/js/layout/views/layout.html'
                }
            }
        });

    }

})();
