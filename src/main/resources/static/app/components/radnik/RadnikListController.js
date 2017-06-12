(function(){
	"use strict";

	var RadnikListController = function($location, RadnikService) {

		var ctrl = this;
		RadnikService.query().$promise.then(function(data) {
			ctrl.radnik = data;
			ctrl.pagination.pages = new Array(Math.ceil(data.length / ctrl.pagination.pageSize));
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
			$location.path("/radnik/"+id);
		};
		ctrl.pagination = {
				currentPage: 1,
				pageSize: 10,
				changePage: function(page) {
					if(ctrl.pagination.currentPage != page && page > 0 && page <= ctrl.pagination.pages.length)
						ctrl.pagination.currentPage = page;
				}
		};
	};

	RadnikListController.$inject = ["$location","RadnikService"];
	angular.module('rva.radnik').controller('RadnikListController', RadnikListController); 
})();