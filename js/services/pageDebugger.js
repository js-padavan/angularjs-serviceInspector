function log(text) {
	if (angular.isObject(text)) {
		text = JSON.stringify(text);
	}
	if (text == undefined) {
		text = "undefined";
	}
	chrome.experimental.devtools.console.addMessage('log', text);
};


app.service('pageDebugger', function() {
	var self = this;
	
	this.userServices = [];


		// printing debugging info to console
	this.log = function (text) {
		if (angular.isObject(text)) {
			text = JSON.stringify(text);
		}
		chrome.experimental.devtools.console.addMessage('log', text);
	};


		// code which will be executed on expected window
	this.getServiceInjection = function (serviceName) {
		console.log('obtaining ' + serviceName);
		var element = angular.element($("[ng-app]"));
		return element.injector().get(serviceName);
	};

		// returning app module of debugging app
	this.getModuleInjection = function () {
		var element = angular.element($("[ng-app]"));
		return angular.module(element.attr("ng-app"));
	};




	this.getServicesList = function(module) {
		self.userServices.length = 0;
		for (var elem in module._invokeQueue) {
			if (module._invokeQueue[elem][1] === 'service'){
				var item = {};
				item.name =  module._invokeQueue[elem][2][0];
				item.data = self.getService(item.name, item);
				self.userServices.push(item);
			}
		}
		self.log(self.userServices);
	};


	this.getService = function(serviceName, storage) {
		self.log('getting service ' + serviceName);
		chrome.devtools.inspectedWindow.eval('(' + self.getServiceInjection.toString() + '("' + serviceName + '"))',
			function(result, isException) {
				if (isException) {
					self.log("exception rised");
					self.log(isException);
				}
				else {
					self.log('service obtained');
					self.log(result);
					storage.data = result;
				}
			}
		);
	};


	this.getAppModule = function() {
		chrome.devtools.inspectedWindow.eval('(' + self.getModuleInjection.toString() + '())',
		     function(result, isException) {
		       if (isException){
		         	self.log("exception rised");
		       		self.log(result);
		       		self.log(isException);
		       }
		       else{
		         	self.log("module obtained");
		       		self.log(result);
		       		self.getServicesList(result);
		       }
		     }
		);		
	};

		// I should make it another way
	this.refresh = function() {
		this.getAppModule();
	}

	this.getAppModule();
})









	




