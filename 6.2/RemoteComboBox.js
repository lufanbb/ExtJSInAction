var remoteJsonStore = new Ext.data.JsonStore({
	root: 'records',
	baseParams: {
		column: 'fullName'
	},
	fields: [{
		name: 'name',
		mapping: 'fullName'
	}, {
		name: 'id',
		mapping: 'id'
	}],
	proxy: new Ext.data.ScriptTagProxy({
		url: 'http://extjsinaction.com/dataQuery.php'
	})
});
var combo = {
	xtype: 'combo',
	fieldLabel: 'Search by name',
	forceSelection: true,
	displayField: 'name',
	valueField: 'id',
	hiddenName: 'customerId',
	loadingText: 'Querying....',
	minChars: 1,
	triggerAction: 'all',
	store: remoteJsonStore
};

var fp = new Ext.form.FormPanel({
	renderTo: Ext.getBody(),
	width: 400,
	height: 'fit',
	title: 'Exercising RemoteComboBox',
	frame: true,
	bodyStyle: 'padding: 6px',
	labelWidth: 126,
	items: combo
});