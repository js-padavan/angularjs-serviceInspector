function log(text) {
	if (angular.isObject(text)) {
		text = JSON.stringify(text);
	}
	if (text == undefined) {
		text = "undefined";
	}
	chrome.experimental.devtools.console.addMessage('log', text);
};


app.service('pageDebugger', function($rootScope) {
	var self = this;
	
	this.userServices = [];

	this.__servicesObtainedNum = 0;


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
				var temp = function() {
					self.__servicesObtainedNum++;
					if (self.__servicesObtainedNum === self.userServices.length) {
						self.log('all services downloaded');
						$rootScope.$broadcast('AllServicesObtained');
					}
				}
				item.data = self.getService(item.name, item, temp);
				self.userServices.push(item);
			}
		}
		self.log(self.userServices);
	};


	this.getService = function(serviceName, storage, successCB) {
		self.log('getting service ' + serviceName);
		chrome.devtools.inspectedWindow.eval('(' + self.getServiceInjection.toString() + '("' + serviceName + '"))',
			function(result, isException) {
				if (isException) {
					self.log("exception rised");
					self.log(isException);
				}
				else {
					self.log(serviceName + ' service obtained');
					storage.data = result;
						// вставить бы сюда нотификатор о том что 
					successCB ?	successCB() : null;
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
		self.__servicesObtainedNum = 0;
		this.getAppModule();
	}

	this.getAppModule();
})









	




