app.directive('servicesList', function(pageDebugger) {
	return {
		restrict : 'E',
		scope : {
			userServices : '='
		},
			// I can't add ng-click on accordion-group, I can observe is-open variable, but I will have to watch all array or make deep watch
		templateUrl : './partials/servicesList.html',
		link : function(scope, iElement) {

			scope.currentService = scope.userServices[0];
			pageDebugger.log('test debug');

			for (var i in scope.userServices) {
				scope.userServices[i].isActive  = false;
			}

			scope.userServices[0].isActive = true;

			scope.loadServiceInfo = function() {
				pageDebugger.log('click event');
				// pageDebugger.log($event.target);
			}
			scope.test = function() {
				pageDebugger.log('test click');
			}

			scope.selectService = function(index) {
				pageDebugger.log(index);
				scope.currentService.isActive = false;
				scope.currentService = scope.userServices[index];
				scope.userServices[index].isActive = true;
			}
		}
	}
})