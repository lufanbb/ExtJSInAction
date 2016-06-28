var myWin = new Ext.Window({
	height: 300,
	width: 300,
	layout: 'absolute',
	autoScroll: true,
	border: false,
	resizable: true,
	items: [{
		title: 'Panel1',
		x: 50,
		y: 50,
		height: 100,
		width: 100,
		html: 'x: 50, y:50',
		frame: true
	}, {
		title: 'Panel2',
		x: 90,
		y: 120,
		height: 75,
		width: 77,
		html: 'x: 90, y: 120',
		frame: true
	}]
});
myWin.show();