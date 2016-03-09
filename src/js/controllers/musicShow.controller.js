(function() {
    'use strict';

    angular
        .module('ubiApp')
        .controller('MusicShowController', Controller);

    Controller.$inject = ['ApiService', '$routeParams'];

    /* @ngInject */
    function Controller(ApiService, $routeParams) {
        var vm = this;
        vm.music = [];

        var id = $routeParams.id;

        loadMusic(id);

        ////////////

        function loadMusic(id) {
            return ApiService.getAll().then(function(data) {
                vm.music = data.data.aTracks[id];

                return vm.music;
            });
        }
    }
})();