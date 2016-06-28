var myBtnHandler = function(btn) {
	Ext.MessageBox.alert('You Clicked', btn.text);
}
var fileBtn = new Ext.Button({
	text: 'File',
	handler: myBtnHandler
});
var editBtn = new Ext.Button({
	text: 'Edit',
	handler: myBtnHandler
});
var tbFill = new Ext.Toolbar.Fill();
var myTopToolbar = new Ext.Toolbar({
	items: [
		fileBtn,
		tbFill,
		editBtn
	]
});
var myBottomToolbar = [{
		text: 'Save',
		handler: myBtnHandler
	},
	'-', {
		text: 'Cancel',
		handler: myBtnHandler
	},
	'->',
	'<b>Items open: 1</b>',
];

var myPanel = new Ext.Panel({
	width: 200,
	height: 150,
	id: 'myPanel',
	title: 'Ext Panels rock!',
	collapsible: true,
	renderTo: Ext.getBody(),
	tbar: myTopToolbar,
	bbar: myBottomToolbar,
	html: 'My first Toolbar Panel!',
	buttons: [{
		text: 'Press me!',
		handler: myBtnHandler
	},{
		text: 'Press Him!',
		handler: myBtnHandler
	}],
	tools: [{
		id: 'gear',
		handler: function(evt, toolEl, panel) {
			var toolClassNames = toolEl.dom.className.split(' ');
			var toolClass = toolClassNames[1];
			var toolId = toolClass.split('-')[2];
			Ext.MessageBox.alert('You Clicked', 'Tool ' + toolId);
		}
	}, {
		id: 'help',
		handler: function() {
			Ext.MessageBox.alert('You Clicked', 'The help tool');
		}
	}]
});