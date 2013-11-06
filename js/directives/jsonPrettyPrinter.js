app.directive('jsonPrettyPrinter', function() {
	return {
		restrict : 'E',
		replace : true,
		scope : {
			object : "=",
		},
		link : function(scope, element) {
			console.log(scope.object);

			// var html = '';
			function buildTemplate(object) {
				var html = '';
				html += '<div class="object">';

				for (var property in object) {
					html += property + ' : ';

					if (object[property] instanceof Array ){
						html += '<div class="object">[';
						for (var i = 0, l = object[property].length; i < l; ++i){
							if (typeof object[property][i] === "object") {
								html += '<div class="object">{';
								html += buildTemplate(object[property][i]);
								html += '}, </div>';
							}
							else {
								html += object[property][i] + ', ';
							}
						}
						html += '],</div>';
						continue;
					}


					if (object[property] instanceof Object){
						html += '<div class="object">{';
						html += buildTemplate(object[property]);
						html += '}, </div>';
						continue;
					}


					if (!angular.isObject(object[property]) && !angular.isArray(object[property])){
						html += object[property];
						html += ',<br />';
					}
				}
				html += '</div>';

				return html;

			}


			scope.$watch('object', function(newVal, oldVal) {
				element.html(buildTemplate(newVal));
			})

		}
	}
})