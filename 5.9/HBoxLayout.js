new Ext.Window({
	//layout: 'hbox',
	layout: 'vbox',
	height: 300,
	width: 300,
	title: 'A Container with an HBox layout',
	layoutConfig: {
		pack: 'top',
		align: 'stretch'
	},
	defaults: {
		frame: true,
	},
	items: [{
		title: 'Panel 1',
		height: 100
	}, {
		title: 'Panel 2',
		height: 100
	}, {
		title: 'Panel 3',
		height: 80
	}]
}).show();