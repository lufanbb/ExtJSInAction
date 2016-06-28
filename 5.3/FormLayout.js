var myWin = new Ext.Window({
	height: 240,
	width: 200,
	bodyStyle: 'padding: 5px',
	layout: 'form',
	labelWidth: 50,
	resizable: true,
	defaultType: 'textfield',
	items: [{
		fieldLabel: 'Name',
		anchor : '-4'
	}, {
		fieldLabel: 'Age',
		width: 25
	}, {
		xtype: 'combo',
		fieldLabel: 'Location',
		anchor : '-4',
		store: ['Here', 'There', 'Anywhere']
	}, {
		xtype: 'textarea',
		fieldLabel: 'Bio',
		anchor : '-4, -134'
	}, {
		xtype: 'panel',
		fieldLabel: '',
		labelSeparator: '',
		frame: true,
		title: 'Instructions',
		html: 'Please fill in the form',
		height: 55,
		anchor : '-4'
	}]
});
myWin.show();