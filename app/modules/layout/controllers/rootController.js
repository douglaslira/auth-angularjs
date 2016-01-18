(function () {
    'use strict';

    angular.module('app.layout')
        .controller('RootController', RootController);

    RootController.$inject = ['$rootScope'];

    /* @ngInject */
    function RootController($rootScope) {
        /* jshint validthis: true */
        var vm = this;
    }
})();
