var app = angular.module('app', []);





app.controller('appCtrl', function($scope, pageDebugger) {
	$scope.userDefinedServices = pageDebugger.userServices;


	$scope.refresh = function($event) {
		pageDebugger.refresh();
		$event.stopPropagation();
	}
})