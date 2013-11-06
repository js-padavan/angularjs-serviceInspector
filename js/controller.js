var app = angular.module('app', []);





app.controller('appCtrl', function($scope, pageDebugger) {
	$scope.userDefinedServices = pageDebugger.userServices;
	$scope.activeElementIndex = 0;

	$scope.selectService = function(index) {
		pageDebugger.log('another service selected');
		$scope.activeElementIndex = index;
	}
	
	$scope.refresh = function($event) {
		pageDebugger.refresh();
		$event.stopPropagation();
	}

	$scope.$on('AllServicesObtained', function() {
		$scope.$apply();
	})
})