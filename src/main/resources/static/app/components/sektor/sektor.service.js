(function(){
	"use strict";
	var SektorService = function($resource, baseUrl) {		 
		return $resource(baseUrl + "sektor/:id",
				{id: "@id"},
				{	
					insert: { method: "POST" },
					update:{ method: "PUT"}
				});	
	};
	SektorService.$inject = ["$resource", "baseUrl"];
	angular.module('rva.sektor').factory('SektorService', SektorService); 
})();