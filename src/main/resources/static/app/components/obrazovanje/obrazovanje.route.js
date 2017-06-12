(function(){
	"use strict";
	var config = function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
		$stateProvider.state('obrazovanjeList',{
			url:'/obrazovanje',
			templateUrl:'app/components/obrazovanje/obrazovanje-list.html'
		}).state('obrazovanje',{
			url:'/obrazovanje/:id',
			templateUrl:'app/components/obrazovanje/obrazovanje.html'
		});
	}
	config.$inject = ["$stateProvider","$urlRouterProvider"];
	angular.module('rva.obrazovanje').config(config);
})();