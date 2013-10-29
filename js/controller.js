var app = angular.module('app', ['ui.bootstrap']);





app.controller('appCtrl', function($scope, pageDebugger) {
	$scope.test = 'sadsadsa';
	$scope.userDefinedServices = pageDebugger.userServices;


	$scope.refresh = function($event) {
		pageDebugger.refresh();
		$event.stopPropagation();
	}

	// setTimeout(function() {
	// 	pageDebugger.log($scope.userDefinedServices);
	// 	pageDebugger.log('services updated');
	// }, 3000);
})