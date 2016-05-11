function createWindow() {
	var panel1 = {
		html: 'I am Panel1',
		id: 'panel1',
		frame: true,
		height: 100
	};
	var panel2 = {
		html: '<b>I am Panel2</b>',
		id: 'panel2',
		frame: true
	};
	var myWin = new Ext.Window({
		renderTo: 'myDiv',
		title: 'myWin',
		id: 'myWin',
		pageX: 50,
		pageY: 50,
		height: 400,
		width: 400,
		items: [
			panel1,
			panel2
		]
	});

	myWin.show();
}

Ext.onReady(createWindow);

function addPanel() {
	Ext.getCmp('myWin').add({
		title: 'Appended Panel',
		id: 'addedPanel',
		html: 'Hello there!'
	});
	Ext.getCmp('myWin').doLayout();


	Ext.getCmp('myWin').insert(1, {
		title: 'Inserted Panel',
		id: 'insertedPanel',
		html: 'It is cool here!'
	});
	Ext.getCmp('myWin').doLayout();
}


Ext.onReady(addPanel);

function movePanel() {
	var panel = Ext.getCmp('insertedPanel');
	Ext.getCmp('myWin').remove(panel, false);
	Ext.getCmp('otherParent').add(panel);
	Ext.getCmp('otherParent').doLayout();
}

Ext.onReady(movePanel);

var otherParent = new Ext.Window({
	id: 'otherParent',
	title: 'otherParent',
	height: 400,
	width: 400,
	pageX: 50,
	pageY: 500,
	items: [{
		html: '<b>I am Panel3</b>',
		id: 'panel3',
		frame: true,
	}, {
		html: '<b>I am Panel4</b>',
		id: 'panel4',
		frame: true
	}]
});

otherParent.setVisible(false);
otherParent.show();