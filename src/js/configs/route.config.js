(function() {
    'use strict';

    angular
	    .module('ubiApp')
	    .config(config);

	function config($routeProvider) {
	    $routeProvider
	        .when('/', {
	            templateUrl: 'views/list.html',
	            controller: 'MusicListController',
	            controllerAs: 'musics'
	        })
	        .when('/show/:id', {
	        	templateUrl: 'views/show.html',
	            controller: 'MusicShowController',
	            controllerAs: 'music'
	        });
	}
})();