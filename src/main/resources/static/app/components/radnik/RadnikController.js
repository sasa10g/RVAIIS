(function(){
	"use strict";
	var RadnikController = function($stateParams, $location, RadnikService, ObrazovanjeService, SektorService, ngDialog, $http, baseUrl) {
		var ctrl = this;

		if($stateParams.id === "add") {
			ctrl.radnik = new RadnikService();  
			ctrl.title = "Unos novog radnika";
		}else{	
			RadnikService.get({id: $stateParams.id}).$promise.then(function(data) {
				ctrl.radnik = data;
			});
			ctrl.title = "Modifikacija radnika čiji je id = " + $stateParams.id;
		};

		ObrazovanjeService.query().$promise.then(function(data) {
			ctrl.obrazovanjeBean = data;			
		});

		SektorService.query().$promise.then(function(data) {
			ctrl.sektorBean = data;			
		});
		ctrl.save = function() {			
			if($stateParams.id === "add")
				ctrl.radnik.$insert(success);
			else
				ctrl.radnik.$update(success);	
		};
		ctrl.remove = function() {
			ctrl.radnik.$delete(success)
			.then(function(value) {
				//sve je ok
			}, function(reason) {
				ngDialog.openConfirm({
					template: 'modalDialogDelete',
					className: 'ngdialog-theme-default'
				})
			});
		}

		function success() {
			$location.path('/radnik');
		};
		
		ctrl.isAdd = function() {
			if($stateParams.id === "add")
				return true;
			else
				return false;
		};

		ctrl.openConfirm = function(operacija) {
			ngDialog.openConfirm({
				template: 'modalDialogId',
				className: 'ngdialog-theme-default'
			}).then(function(value) {
				ctrl.remove();
			}, function(reason) {
				//ukoliko se ne izvrsi then
			});
		};
	};

	RadnikController.$inject = ["$stateParams", "$location", "RadnikService", "ObrazovanjeService","SektorService", "ngDialog", "$http", "baseUrl"];
	angular.module('rva.radnik').controller('RadnikController', RadnikController);
})();