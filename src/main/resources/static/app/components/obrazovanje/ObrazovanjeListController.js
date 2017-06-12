(function(){
	"use strict";
	var ObrazovanjeListController = function($location, ObrazovanjeService){
		var ctrl = this;
		ObrazovanjeService.query().$promise.then(function(data){
			ctrl.obrazovanja = data;
			ctrl.pagination.pages = new Array(Math.ceil(data.length / ctrl.pagination.pageSize));
		});
		ctrl.tableChanged = function(sortParam){
			if(ctrl.sort === sortParam){
				ctrl.sortDirection = ctrl.sortDirection == '+' ? '-' : '+';
			}else{
				ctrl.sort = sortParam;
				ctrl.sortDirection = '+';
			}
		};
		ctrl.edit = function(id) {
			$location.path("/obrazovanje/"+id);
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
	ObrazovanjeListController.$inject=["$location", "ObrazovanjeService"];
	angular.module('rva.obrazovanje').controller('ObrazovanjeListController', ObrazovanjeListController)
})();