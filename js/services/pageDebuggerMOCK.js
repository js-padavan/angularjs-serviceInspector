app.service('pageDebugger', function() {
	var self = this;
	this.userServices =[];

	this.log = function(text) {
		console.log(text);
	}

	this.refresh = function() {
		self.userServices.length = 0;
		var obj = {"dirInfo":{"photos":[{"fileName":"+PICT0335.JPG","type":"img","mTime":"2013-10-04T14:33:32.000Z","cTime":"2013-10-04T14:33:32.000Z","$$hashKey":"00D"},{"fileName":"+PICT0336.JPG","type":"img","mTime":"2013-10-04T14:33:32.000Z","cTime":"2013-10-04T14:33:32.000Z","$$hashKey":"00E"},{"fileName":"+PICT0337.JPG","type":"img","mTime":"2013-10-04T14:33:32.000Z","cTime":"2013-10-04T14:33:32.000Z","$$hashKey":"00F"},{"fileName":"DSC04890.JPG","type":"img","mTime":"2013-09-05T14:09:23.000Z","cTime":"2013-09-05T14:09:23.000Z","$$hashKey":"00G"},{"fileName":"DSC04903.JPG","type":"img","mTime":"2013-09-05T14:09:56.000Z","cTime":"2013-09-05T14:09:56.000Z","$$hashKey":"00H"},{"fileName":"DSC_1034.JPG","type":"img","mTime":"2013-09-05T14:24:58.000Z","cTime":"2013-09-05T14:24:58.000Z","$$hashKey":"00I"},{"fileName":"DSC_1046.JPG","type":"img","mTime":"2013-09-05T14:25:15.000Z","cTime":"2013-09-05T14:25:15.000Z","$$hashKey":"00J"},{"fileName":"IMG_2192.JPG","type":"img","mTime":"2013-09-05T14:25:45.000Z","cTime":"2013-09-05T14:25:45.000Z","$$hashKey":"00K"},{"fileName":"IMG_2203.JPG","type":"img","mTime":"2013-09-05T14:25:46.000Z","cTime":"2013-09-05T14:25:46.000Z","$$hashKey":"00L"},{"fileName":"IMG_2209.JPG","type":"img","mTime":"2013-09-05T14:25:28.000Z","cTime":"2013-09-05T14:25:28.000Z","$$hashKey":"00M"},{"fileName":"P1070174.JPG","type":"img","mTime":"2013-09-05T14:28:44.000Z","cTime":"2013-09-05T14:28:44.000Z","$$hashKey":"00N"},{"fileName":"P1080027.JPG","type":"img","mTime":"2012-11-29T19:19:03.000Z","cTime":"2013-08-08T09:25:37.000Z","$$hashKey":"00O"},{"fileName":"P1080028.JPG","type":"img","mTime":"2012-11-29T18:52:48.000Z","cTime":"2013-08-08T09:25:39.000Z","$$hashKey":"00P"},{"fileName":"P1080034.JPG","type":"img","mTime":"2012-11-29T19:18:14.000Z","cTime":"2013-08-08T09:25:41.000Z","$$hashKey":"00Q"},{"fileName":"P1070177.JPG","type":"img","mTime":"2013-09-05T14:28:45.000Z","cTime":"2013-09-05T14:28:45.000Z","$$hashKey":"00R"},{"fileName":"P1070189.JPG","type":"img","mTime":"2013-09-05T14:28:47.000Z","cTime":"2013-09-05T14:28:47.000Z","$$hashKey":"00S"},{"fileName":"P1070183.JPG","type":"img","mTime":"2013-09-05T14:28:46.000Z","cTime":"2013-09-05T14:28:46.000Z","$$hashKey":"00T"},{"fileName":"P1070190.JPG","type":"img","mTime":"2013-09-05T14:28:49.000Z","cTime":"2013-09-05T14:28:49.000Z","$$hashKey":"00U"},{"fileName":"P1070192.JPG","type":"img","mTime":"2013-09-05T14:28:50.000Z","cTime":"2013-09-05T14:28:50.000Z","$$hashKey":"00V"},{"fileName":"P1080035.JPG","type":"img","mTime":"2012-11-29T19:15:28.000Z","cTime":"2013-08-08T09:25:42.000Z","$$hashKey":"00W"},{"fileName":"P1080048.JPG","type":"img","mTime":"2012-11-29T18:49:06.000Z","cTime":"2013-08-08T09:25:43.000Z","$$hashKey":"00X"},{"fileName":"P1080038.JPG","type":"img","mTime":"2012-11-29T19:22:25.000Z","cTime":"2013-08-08T09:25:43.000Z","$$hashKey":"00Y"}],"files":[],"dirs":[{"fileName":"oneMore","type":"dir","mTime":"2013-09-06T05:42:20.000Z","cTime":"2013-08-08T09:28:08.000Z","$$hashKey":"00B"}]},"currentDir":"/innerTest","currentPhotoIndex":-1,"currentPhoto":"","wholeCurrentImageUrl":"","getFilesByFolder":{},"getFilesByAlbum":{}};
		self.userServices.push({name : 'test', data : obj});
		for (var i = 0; i < 10; i++) {
			var item = {};
			item.name = 'service' + i;
			item.data = Math.random();
			self.userServices.push(item);
		}
	}

	this.refresh();
});