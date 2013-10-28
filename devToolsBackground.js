var panels = chrome.devtools.panels;

var a = 0;


	// DEBUGING STUFF
function log(text) {
	chrome.experimental.devtools.console.addMessage('log', text);
}



	// создаем панельку
panels.create('Service Inspector', null, 'servicePanel.html', function(panel) {
	log(JSON.stringify(panel));
});

	// I think it is not good solution of finding app name,  TODO: think about others

// function getModule () {
// 	console.log('obtaining module');
// 	var appName = angular.element($("[ng-app]")).attr("ng-app");
// 	return angular.module(appName);
// }


// 	// pass variable to panel page
// function getListOfServices(module) {
// 	var services = [];
// 	for (var elem in module._invokeQueue) {
// 		log(JSON.stringify(module._invokeQueue[elem]));
// 		if (module._invokeQueue[elem][1] === 'service'){
// 			services.push(module._invokeQueue[elem][2][0])
// 		}
// 	}

// 	return services;
// 	log(JSON.stringify(services));
// }



// chrome.devtools.inspectedWindow.eval('(' + getModule.toString() + '())',
//      function(result, isException) {
//        if (isException){
//          	log("exception rised");
//        		log(JSON.stringify(result));
//        }
//        else{
//          	log("module obtained");
//        		log(JSON.stringify(result));
//        		getListOfServices(result);
//        }
//      }
// );