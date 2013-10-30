app.directive('servicesList', function(pageDebugger) {
	return {
		restrict : 'E',
		scope : {
			userServices : '='
		},
			// I can't add ng-click on accordion-group, I can observe is-open variable, but I will have to watch all array or make deep watch
		templateUrl : './partials/servicesList.html',
		link : function(scope, iElement) {
			//scope.currentService = undefined;

			


			scope.activeElementIndex = 0;

		
			scope.$on('AllServicesObtained', function() {
				scope.$apply();
			})

			scope.selectService = function(index) {
				pageDebugger.log('service selected');
				scope.activeElementIndex = index;
				//scope.currentService = scope.userServices[index];
			}
		}
	}
})