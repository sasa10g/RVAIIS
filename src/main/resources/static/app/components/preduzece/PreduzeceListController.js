(function(){
	"use strict";

	var PreduzeceListController = function($location, PreduzeceService) {
		var ctrl = this;

		PreduzeceService.query().$promise.then(function(data) {
			ctrl.preduzeca = data;
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
			$location.path("/preduzece/"+id);
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

	PreduzeceListController.$inject = ["$location","PreduzeceService"];
	angular.module('rva.preduzece').controller('PreduzeceListController', PreduzeceListController); 
})();