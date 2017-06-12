(function(){
	"use strict";
	var SideBarController = function($location) {
		var sbc = this;
		sbc.isActive = function(path){
			return $location.path().indexOf(path) != -1;
		};
	};
	SideBarController.$inject=["$location"];
	angular.module('rva.core').controller('SideBarController',SideBarController);
})();