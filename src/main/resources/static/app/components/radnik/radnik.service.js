(function(){
	"use strict";
	var RadnikService = function($resource, baseUrl) {		 
		return $resource(baseUrl + "radnik/:id",
				{id: "@id"},
				{	
					insert: { method: "POST" },
					update:{ method: "PUT"}
				});
	}
	RadnikService.$inject = ["$resource", "baseUrl"];
	angular.module('rva.radnik').factory('RadnikService', RadnikService);
})();