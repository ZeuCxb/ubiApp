(function() {
    'use strict';

    angular
        .module('ubiApp')
        .directive('musicShow', directive);

    /* @ngInject */
    function directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            controller: Controller,
            templateUrl: 'src/templates/musicShow.html',
            scope: {
            	value: '='
            }
        };

        return directive;
    }

    /* @ngInject */
    function Controller($scope) {
    }
})();