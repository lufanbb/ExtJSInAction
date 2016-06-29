var arrayData = [
	['Jay Garcia', 'MD'],
	['Aaron Baker', 'VA'],
	['Susan Smith', 'DC'],
	['Mary Stein', 'DE'],
	['Bryan Shanley', 'NJ'],
	['Nyri Selgado', 'CA']
];
/*var nameRecord = Ext.data.Record.create([{
	name: 'personName',
	mapping: 1
}, {
	name: 'state',
	m|apping: 2
}]);
var arrayReader = new Ext.data.ArrayReader({}, nameRecord);
var memoryProxy = new Ext.data.MemoryProxy(arrayData);
var store = new Ext.data.ArrayStore({
	reader: arrayReader,
	proxy: memoryProxy
});*/

/**
 * [Below simplified the code is the same as the snippet above]
 * @type {Ext}
 */
var store = new Ext.data.ArrayStore({
	data: arrayData,
	fields: ['personName', 'state']
});

var colModel = new Ext.grid.ColumnModel([{
	header: 'Full Name',
	sortable: true,
	dataIndex: 'personName'
}, {
	header: 'State',
	dataIndex: 'state'
}]);
var gridView = new Ext.grid.GridView();
var selModel = new Ext.grid.RowSelectionModel({
	singleSelect: false
});

function createGridPanel() {
	var grid = new Ext.grid.GridPanel({
		title: 'Our first grid',
		renderTo: Ext.getBody(),
		autoHeight: true,
		width: 300,
		store: store,
		view: gridView,
		colModel: colModel,
		selModel: selModel
	});
}

Ext.onReady(createGridPanel);