var remoteJsonStore = new Ext.data.JsonStore({
	root: 'records',
	baseParams: {
		column: 'fullName'
	},
	fields: [{
		name: 'displayName',
		mapping: 'fullName'
	}, {
		name: 'id',
		mapping: 'id'
	}, {
		name: 'address',
		mapping: 'street'
	}, {
		name: 'city',
		mapping: 'city'
	}, {
		name: 'state',
		mapping: 'state'
	}, {
		name: 'zipCode',
		mapping: 'zip'
	}],
	proxy: new Ext.data.ScriptTagProxy({
		url: 'http://extjsinaction.com/dataQuery.php'
	})
});

//The order makes a differenct, if tpl is difined after combo which reference it.
//It will not apply the template correclty.
var tpl = new Ext.XTemplate(
	'<tpl for="."><div class="combo-result-item">',
	'<div class="combo-name">{displayName}</div>',
	'<div class="combo-full-address">{address}</div>',
	'<div class="combo-full-address">{city} {state} {zipCode}</div>',
	'</div></tpl>', {
		compiled: true
			// compile immediately, without the compile, 
			// it is not loading the template correctly.
	}
);

var combo = {
	xtype: 'combo',
	fieldLabel: 'Search by name',
	forceSelection: true,
	displayField: 'displayName',
	valueField: 'id',
	hiddenName: 'customerId',
	loadingText: 'Querying....',
	minChars: 1,
	pageSize: 10,
	tpl: tpl,
	itemSelector: 'div.combo-result-item',
	triggerAction: 'all',
	store: remoteJsonStore
};

var timeCombo = {
	xtype: 'timefield',
	fieldLabel: 'Please select time',
	anchor: '100%',
	minValue: '09:00',
	maxValue: '18:00',
	increment: 30,
	format: 'H:i'
}


var fp = new Ext.form.FormPanel({
	renderTo: Ext.getBody(),
	width: 400,
	height: 'fit',
	title: 'Exercising RemoteComboBox',
	frame: true,
	bodyStyle: 'padding: 6px',
	labelWidth: 126,
	items: [combo, timeCombo]
});