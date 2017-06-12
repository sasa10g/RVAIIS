(function(){
	"use strict";
	var config = function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider.state('home',{
			url: '/home',
			templateUrl: 'app/components/core/home.html'
		}).state('about',{
			url: '/about',
			templateUrl: 'app/components/core/about.html'
		}).state('autor',{
			url: '/autor',
			templateUrl: 'app/components/core/autor.html'
		}).state('location',{
			url: '/location',
			templateUrl: 'app/components/core/location.html'
		}).state('contact',{
			url: '/contact',
			templateUrl: 'app/components/core/contact.html'
		})
	}
	config.$inject = ["$stateProvider", "$urlRouterProvider"];
	angular.module('rva.core').config(config);
})
();