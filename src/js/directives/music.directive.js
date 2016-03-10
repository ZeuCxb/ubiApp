(function() {
    'use strict';

    angular
        .module('ubiApp')
        .directive('music', directive);

    /* @ngInject */
    function directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            controller: Controller,
            templateUrl: 'public/templates/music.html',
            scope: {
            	value: '='
            }
        };

        return directive;
    }

    /* @ngInject */
    function Controller($scope) {}
})();