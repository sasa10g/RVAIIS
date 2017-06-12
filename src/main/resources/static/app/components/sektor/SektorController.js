(function() {
	"use strict";
	var SektorController = function($stateParams, $location, SektorService, PreduzeceService, ngDialog, $http, baseUrl, $filter) {
		var ctrl = this;
		if($stateParams.id == "add"){
			ctrl.sektor = new SektorService();
			ctrl.title = "Unos novog sektora";
		}else{	
			SektorService.get({id: $stateParams.id}).$promise.then(function(data) {
				ctrl.sektor = data;
			});
			ctrl.title = "Modifikacija sektora čiji je id = " + $stateParams.id;
		};

		PreduzeceService.query().$promise.then(function(data) {
			ctrl.preduzeceBean = data;
		});
		ctrl.save = function() {
			if($stateParams.id === "add")
				ctrl.preduzece.$insert(success);
			else
				ctrl.preduzece.$update(success);
		}
		function success() {
			$location.path('/sektor');
		};
		
		ctrl.remove = function() {
			ctrl.sektor.$delete(success)
			.then(function(value) {
				//sve je ok
			}, function(reason) {
				ngDialog.openConfirm({
					template: 'modalDialogDelete',
					className: 'ngdialog-theme-default'
				})
			});
		}
		
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
		ctrl.prikaziRadnike = function() {
			$location.path('/radnici/'+ctrl.sektor.id);
		};
		
	};
	SektorController.$inject = ["$stateParams", "$location", "SektorService", "PreduzeceService", "ngDialog", "$http", "baseUrl","$filter"];
	angular.module('rva.sektor').controller('SektorController', SektorController);
})();