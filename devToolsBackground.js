var panels = chrome.devtools.panels;


	// создаем панельку
panels.create('Service Inspector', null, 'servicePanel.html', function(panel) {
	log(JSON.stringify(panel));
});

