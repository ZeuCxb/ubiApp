(function() {
    'use strict';

    angular
        .module('ubiApp')
        .directive('musicList', directive);

    /* @ngInject */
    function directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            controller: Controller,
            templateUrl: 'public/templates/musicList.html',
            scope: {
            	musics: '='
            }
        };

        return directive;
    }

    /* @ngInject */
    function Controller($scope) {}
})();