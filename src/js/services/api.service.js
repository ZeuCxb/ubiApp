(function() {
    'use strict';

    angular
        .module('ubiApp')
        .service('ApiService', Service);

    Service.$inject = ['$http'];

    /* @ngInject */
    function Service($http) {
    	var url = 'http://freemusicarchive.org/recent.json';
    	
        this.getAll = getAll;

        function getAll() {
        	return $http.get(url);
        }
    }
})();