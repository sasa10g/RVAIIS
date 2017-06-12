(function(){
	"use strict";
	var config = function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
		.state('preduzeceList', {
			url: '/preduzece',
			templateUrl: 'app/components/preduzece/preduzece-list.html'
		}).state('preduzece', {
			url: '/preduzece/:id',
			templateUrl: 'app/components/preduzece/preduzece.html'
		});
	};
	config.$inject = ["$stateProvider","$urlRouterProvider"];
	angular.module('rva.preduzece').config(config);
})();