var myWin = new Ext.Window({
	height: 500,
	width: 300,
	layout: 'anchor',
	border: false,
	anchorSize: '400',
	autoScroll: false,
	items: [{
		title: 'Panel1',
		anchor: '-50, -400',
		frame: true
	}, {
		title: 'Panel2',
		anchor: '0, 30%',
		frame: true
	}, {
		title: 'Panel3',
		anchor: '-10, -50',
		frame: true
	}]
});
myWin.show();