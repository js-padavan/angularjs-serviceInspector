app.service('pageDebugger', function() {
	var self = this;
	this.userServices =[];

	this.log = function(text) {
		console.log(text);
	}

	this.refresh = function() {
		self.userServices.length = 0;
		for (var i = 0; i < 10; i++) {
			var item = {};
			item.name = 'service' + i;
			item.data = Math.random();
			self.userServices.push(item);
		}
	}

	this.refresh();
});