(function() {
    'use strict';

    angular
        .module('ubiApp')
        .controller('MusicListController', Controller);

    Controller.$inject = ['ApiService'];

    /* @ngInject */
    function Controller(ApiService) {
        var vm = this;
        vm.musics = [];

        loadMusicList();

        ////////////

        function loadMusicList() {
            return ApiService.getAll().then(function(data) {
                vm.musics = data.data.aTracks;

                return vm.musics;
            });
        }
    }
})();