(function() {
	"use strict";
	var RadnikPoSektoruController = function($stateParams, $location, 
			RadnikService, SektorService, ngDialog, $http, baseUrl) {
		var ctrl = this;
		
		SektorService.get({
			id: $stateParams.idSektora}).$promise.then(function(data) {
				ctrl.sektorBean = data;
			});
		
		$http({
			method: 'GET',
			url: baseUrl+'radniciZaSektorId/'+ $stateParams.idSektora
		}).then(function successCallback(response) {
			ctrl.radnik = response.data;
		});
		
		ctrl.tableChanged = function(sortParam) {
			if(ctrl.sort === sortParam) {
				ctrl.sortDirection = ctrl.sortDirection == '+' ? '-' : '+';
			} else {
				ctrl.sort = sortParam;
				ctrl.sortDirection = '+';
			}
		};
		ctrl.edit = function(id) {
			$location.path("/radnik/"+id+"/"+ctrl.sektorBean.id+"/radnikPoSektoru");
		};
		
		ctrl.back = function() {
			window.history.back();
		};
		
	};
	
	RadnikPoSektoruController.$inject = ["$stateParams","$location","RadnikService","SektorService",
		"ngDialog","$http","baseUrl"];
	angular.module('rva.radnik').controller("RadnikPoSektoruController", RadnikPoSektoruController);
})();










