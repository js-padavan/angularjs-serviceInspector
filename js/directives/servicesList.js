app.directive('servicesList', function(pageDebugger) {
	return {
		restrict : 'E',
		scope : {
			userServices : '='
		},
			// I can't add ng-click on accordion-group, I can observe is-open variable, but I will have to watch all array or make deep watch
		template : '<accordion close-others="false">'+
						'<accordion-group ng-repeat="item in userServices" heading={{item.name}} ng-click="loadServiceInfo()">' +
							'{{item.data}}' +
						'</accordion-group>'+
					'</accordion>',
		link : function(scope, iElement) {
			pageDebugger.log('test debug');
			pageDebugger.log(scope.userServices);

			scope.loadServiceInfo = function() {
				pageDebugger.log('click event');
				// pageDebugger.log($event.target);
			}
			scope.test = function() {
				pageDebugger.log('test click');
			}
		}
	}
})