(function(){
	"use strict";
	angular.module('rva.core',['ui.router', 'ngResource', 'ngDialog'])
	.config(['ngDialogProvider', function(ngDialogProvider){
		ngDialogProvider.setDefaults({
			className: 'ngdialog-theme-default',
			plain: false,
			showClose: true,
			closeByDocument: true,
			closeByEscape: true,
			appendTo:false			
		})
	}])
})
();