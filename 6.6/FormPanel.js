var checkboxes = [{
	xtype: 'checkbox',
	fieldLabel: 'Which do you own',
	boxLabel: 'Cat',
	inputValue: 'cat'
}, {
	xtype: 'checkbox',
	fieldLabel: '',
	labelSeparator: ' ',
	boxLabel: 'Dog',
	inputValue: 'dog'
}, {
	xtype: 'checkbox',
	fieldLabel: '',
	labelSeparator: ' ',
	boxLabel: 'Fish',
	inputValue: 'fish'
}, {
	xtype: 'checkbox',
	fieldLabel: '',
	labelSeparator: ' ',
	boxLabel: 'Bird',
	inputValue: 'bird'
}];

var checkboxesGroup = {
	xtype: 'checkboxgroup',
	fieldLabel: 'Which do you own',
	anchor: '100%',
	columns: 2,
	items: [{
		boxLabel: 'Cat',
		inputValue: 'cat'
	}, {
		boxLabel: 'Dog',
		inputValue: 'dog'
	}, {
		boxLabel: 'Fish',
		inputValue: 'fish'
	}, {
		boxLabel: 'Bird',
		inputValue: 'bird'
	}]
};

var radio = [{
	xtype: 'radio',
	fieldLabel: 'Which do you own',
	name: 'animal',
	boxLabel: 'Cat',
	inputValue: 'cat'
}, {
	xtype: 'radio',
	fieldLabel: '',
	name: 'animal',
	labelSeparator: ' ',
	boxLabel: 'Dog',
	inputValue: 'dog'
}, {
	xtype: 'radio',
	fieldLabel: '',
	name: 'animal',
	labelSeparator: ' ',
	boxLabel: 'Fish',
	inputValue: 'fish'
}, {
	xtype: 'radio',
	fieldLabel: '',
	name: 'animal',
	labelSeparator: ' ',
	boxLabel: 'Bird',
	inputValue: 'bird'
}];

var RadioGroup = {
	xtype: 'radiogroup',
	fieldLabel: 'Which do you own',
	anchor: '100%',
	columns: 2,
	items: [{
		name: 'animal',
		boxLabel: 'Cat',
		inputValue: 'cat'
	}, {
		name: 'animal',
		boxLabel: 'Dog',
		inputValue: 'dog'
	}, {
		name: 'animal',
		boxLabel: 'Fish',
		inputValue: 'fish'
	}, {
		name: 'animal',
		boxLabel: 'Bird',
		inputValue: 'bird'
	}]
};

var fp = new Ext.form.FormPanel({
	renderTo: Ext.getBody(),
	width: 'fit',
	height: 'fit',
	title: 'Check Box',
	labelWidth: 150,
	bodyStyle: 'padding: 2px',
	items: [checkboxes,checkboxesGroup,radio,RadioGroup]
});