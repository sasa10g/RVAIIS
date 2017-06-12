(function(){
	"use strict";
	var SektorListController = function($location, SektorService) {
		var ctrl = this;
		SektorService.query().$promise.then(function(data) {
			ctrl.sektor = data;
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
			$location.path("/sektor/"+id);
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
	SektorListController.$inject = ["$location","SektorService"];
	angular.module('rva.sektor').controller('SektorListController', SektorListController); 
})();