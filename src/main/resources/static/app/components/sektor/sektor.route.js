(function(){
	"use strict";
	var config = function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
		.state('sektorList', {
			url: '/sektor',
			templateUrl: 'app/components/sektor/sektor-list.html'
		}).state('sektor', {
			url: '/sektor/:id',
			templateUrl: 'app/components/sektor/sektor.html'
		});
	};
	config.$inject = ["$stateProvider","$urlRouterProvider"];
	angular.module('rva.sektor').config(config);
})();