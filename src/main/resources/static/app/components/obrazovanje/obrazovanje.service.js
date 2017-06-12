(function(){
	"use strict";
	var ObrazovanjeService = function($resource,baseUrl){
		return $resource(baseUrl+"obrazovanje/:id",
				{id: "@id"},
				{
					insert:{ method: "POST"},
					update:{ method: "PUT"}
				});
	};

	ObrazovanjeService.$inject=["$resource","baseUrl"];
	angular.module('rva.obrazovanje').factory('ObrazovanjeService', ObrazovanjeService);
})();