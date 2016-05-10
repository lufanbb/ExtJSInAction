// new Ext.Window({
// 	width: 200,
// 	height: 150,
// 	title: 'Accordion window',
// 	layout: 'accordion',
// 	border: false,
// 	layoutConfig: {
// 		animate: true
// 	},
// 	items: [{
// 		xtype: 'panel',
// 		title: 'Plain Panel 1',
// 		html: 'Panel with an xtype specified'
// 	}, {
// 		title: 'Plain Panel 2',
// 		html: 'Panel with <b>no</b> xtype specified'
// 	}]
// }).show();

var panel1 = {
	xtype: 'panel',
	title: 'Plain Panel 3',
	html: 'Panel with an xtype specified outside'
};
var panel2 = {
	title: 'Plain Panel 4',
	html: 'Panel with <b>no</b> xtype specified outside'
};



new Ext.Window({
	width: 200,
	height: 150,
	title: 'Accordion window',
	layout: 'accordion',
	border: false,
	layoutConfig: {
		animate: true
	},
	items: [
		panel1,
		panel2
	]
}).show();

function renderPanel() {
	var myPanel = new Ext.Panel({
		height: 50,
		width: 150,
		title: 'Lazy rendered Panel',
		frame: true
	});
	myPanel.render('myDiv2');
}

Ext.onReady(renderPanel);