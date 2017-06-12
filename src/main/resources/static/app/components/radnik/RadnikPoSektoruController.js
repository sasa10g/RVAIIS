(function() {
	"use strict";
	var StavkaPoPorudzbiniController = function($stateParams, $location, 
			StavkaPorudzbineService, PorudzbinaService, ngDialog, $http, baseUrl) {
		var ctrl = this;
		PorudzbinaService.get({
			id: $stateParams.idPorudzbine}).$promise.then(function(data) {
				ctrl.porudzbinaBean = data;
			});
		
		$http({
			method: 'GET',
			url: baseUrl+'stavkeZaPorudzbinaId/'+ $stateParams.idPorudzbine
		}).then(function successCallback(response) {
			ctrl.stavkaPorudzbine = response.data;
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
			$location.path("/stavkaPorudzbine/"+id+"/"+ctrl.porudzbinaBean.id+"/stavkaPoPorudzbini");
		};
		
		ctrl.back = function() {
			window.history.back();
		};
		
	};
	
	StavkaPoPorudzbiniController.$inject = ["$stateParams","$location","StavkaPorudzbineService","PorudzbinaService",
		"ngDialog","$http","baseUrl"];
	angular.module('rva.stavkaPorudzbine').controller("StavkaPoPorudzbiniController", StavkaPoPorudzbiniController);
})();










