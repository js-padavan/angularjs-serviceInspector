app.directive('servicesList', function(pageDebugger) {
	return {
		restrict : 'E',
		scope : {
			userServices : '='
		},
		templateUrl : './partials/servicesList.html',
		transclude: true,
		link : function(scope, iElement) {

			scope.activeElementIndex = 0;
		
			scope.$on('AllServicesObtained', function() {
				scope.$apply();
			})

			scope.selectService = function(index) {
				scope.activeElementIndex = index;
			}
		}
	}
})