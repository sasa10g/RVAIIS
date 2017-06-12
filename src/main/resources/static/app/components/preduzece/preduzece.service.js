(function(){
	"use strict";

	var PreduzeceService = function($resource, baseUrl) {		 
		return $resource(baseUrl + "preduzece/:id",
				{id: "@id"},
				{	
					insert: { method: "POST" },
					update: { method: "PUT" }
				});
	};

	PreduzeceService.$inject = ["$resource", "baseUrl"];
	angular.module('rva.preduzece').factory('PreduzeceService', PreduzeceService); 
})();