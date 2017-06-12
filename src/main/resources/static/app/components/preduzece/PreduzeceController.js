(function() {
	"use strict";
	var PreduzeceController = function($stateParams, $location, PreduzeceService, ngDialog, $http, baseUrl) {
		var ctrl = this;
		if($stateParams.id === "add"){
			ctrl.preduzece = new PreduzeceService();
			ctrl.title = "Unos novog preduzeća";
		}else{
			PreduzeceService.get({id: $stateParams.id}).$promise.then(function(data) {
				ctrl.preduzece = data;
			});
			ctrl.title = "Modifikacija preduzeće čiji je id = "+$stateParams.id.toString();
		}
		ctrl.save = function() {
			if($stateParams.id === "add")
				ctrl.preduzece.$insert(success);
			else
				ctrl.preduzece.$update(success);
		}
		function success() {
			$location.path('/preduzece');
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
		
		ctrl.isAdd = function() {
			if($stateParams.id === "add")
				return true;
			else
				return false;
		};
		
		ctrl.remove = function() {
			ctrl.preduzece.$delete(success)
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
	
	PreduzeceController.$inject = ["$stateParams","$location","PreduzeceService","ngDialog","$http","baseUrl"];
	angular.module('rva.preduzece').controller('PreduzeceController', PreduzeceController);
})();