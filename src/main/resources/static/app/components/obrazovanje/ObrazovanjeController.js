(function() {
	"use strict";
	var ObrazovanjeController = function($stateParams, $location, ObrazovanjeService, ngDialog, $http, baseUrl) {
		var ctrl = this;
		if($stateParams.id === "add"){
			ctrl.obrazovanje = new ObrazovanjeService();
			ctrl.title = "Unos novog obrazovanja";
		}else{
			ObrazovanjeService.get({id: $stateParams.id}).$promise.then(function(data) {
				ctrl.obrazovanje = data;
			});
			ctrl.title = "Modifikacija obrazovanja čiji je id = "+$stateParams.id.toString();
		}
		ctrl.save = function() {
			if($stateParams.id === "add")
				ctrl.obrazovanje.$insert(success);
			else
				ctrl.obrazovanje.$update(success);
		}
		function success() {
			$location.path('/obrazovanje');
		};
		
		ctrl.openConfirm = function(operacija) {
			ngDialog.openConfirm({
				template: 'modalDialogId',
				className: 'ngdialog-theme-default'
			}).then(function(value) {
				ctrl.remove();
			}, function(reason){
				//ukoliko ne
			});
		};
		
		ctrl.isEdit = function() {
			 			if($stateParams.id === "add")
			 				return false;
			 			else
			 				return true;
			 		};
		
		ctrl.isAdd = function() {
			if($stateParams.id === "add")
				return true;
			else
				return false;
		};
		
		ctrl.remove = function() {
			ctrl.obrazovanje.$delete(success)
			.then(function(value) {
				//izbrisano
			}, function(reason) {
				ngDialog.openConfirm({
					template: 'modalDialogDelete',
					className: 'ngdialog-theme-default'
				})
			});
		};
		
	};
	
	ObrazovanjeController.$inject = ["$stateParams","$location","ObrazovanjeService","ngDialog","$http","baseUrl"];
	angular.module('rva.obrazovanje').controller('ObrazovanjeController', ObrazovanjeController);
})();