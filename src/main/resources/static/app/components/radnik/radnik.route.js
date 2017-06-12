(function(){
	"use strict";

	var config = function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
		.state('radnikList', {
			url: '/radnik',
			templateUrl: 'app/components/radnik/radnik-list.html'
		}).state('radnik', {
			url: '/radnik/:id',
			templateUrl: 'app/components/radnik/radnik.html'
		}).state('radnikPoSektoru', {
			url: '/radnikPoSektoru/:idSektora',
			templateUrl: 'app/components/radnik/radnikPoSektoru.html'
		}); 
	};

	config.$inject = ["$stateProvider","$urlRouterProvider"];
	angular.module('rva.radnik').config(config);
})();