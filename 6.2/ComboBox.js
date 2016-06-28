var mySimpleStore = new Ext.data.ArrayStore({
	data: [
		['Jack Slocum'],
		['Abe Elias'],
		['Aaron Conran'],
		['Evan Trimboli']
	],
	fields: ['name']
});
var combo = {
	xtype: 'combo',
	fieldLabel: 'Select a name',
	store: mySimpleStore,
	displayField: 'name',
	typeAhead: true,
	mode: 'local'
};
var fp = new Ext.form.FormPanel({
	renderTo: Ext.getBody(),
	width: 400,
	height: 'fit',
	title: 'Exercising ComboBox',
	frame: true,
	bodyStyle: 'padding: 6px',
	labelWidth: 126,
	items: combo
});