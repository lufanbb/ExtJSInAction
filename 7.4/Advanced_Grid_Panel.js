var recordFields = [{
	name: 'id',
	mapping: 'id'
}, {
	name: 'firstname',
	mapping: 'firstname'
}, {
	name: 'lastname',
	mapping: 'lastname'
}, {
	name: 'street',
	mapping: 'street'
}, {
	name: 'city',
	mapping: 'city'
}, {
	name: 'state',
	mapping: 'state'
}, {
	name: 'zip',
	mapping: 'zip'
}, {
	name: 'country',
	mapping: 'country'
}];

var remoteProxy = new Ext.data.ScriptTagProxy({
	url: 'http://extjsinaction.com/dataQuery.php'
});

var remoteJsonStore = new Ext.data.JsonStore({
	fields: recordFields,
	proxy: remoteProxy,
	totalProperty: 'totalCount',
	root: 'records',
	id: 'ourRemoteStore',
	autoLoad: false,
	remoteSort: true
});

var colorTextBlue = function(id) {
	return '<span style="color: #0000FF;">' + id + '</span>';
};
var stylizeAddress = function(street, column, record) {
	var city = record.get('city');
	var state = record.get('state');
	var zip = record.get('zip');
	return String.format('{0}<br>{1} {2}, {3}', street, city, state, zip);
};

var columnModel = [{
	header: 'ID',
	dataIndex: 'id',
	sortable: true,
	width: 50,
	resizable: false,
	hidden: true,
	renderer: colorTextBlue
}, {
	header: 'Last Name',
	dataIndex: 'lastname',
	sortable: true,
	hideable: false,
	width: 75
}, {
	header: 'First Name',
	dataIndex: 'firstname',
	sortable: true,
	hideable: false,
	width: 75
}, {
	header: 'Address',
	dataIndex: 'street',
	sortable: false,
	id: 'addressCol',
	renderer: stylizeAddress
}, {
	header: 'Country',
	dataIndex: 'country',
	sortable: true,
	width: 150
}];

var pagingToolbar = {
	xtype: 'paging',
	store: remoteJsonStore,
	pageSize: 50,
	displayInfo: true
};

var doMsgBoxAlert = function(thisGrid) {
	var record = thisGrid.selModel.getSelected();
	var firstName = record.get('firstname');
	var lastName = record.get('lastname');
	var msg = String.format('The record you chose:<br /> {0}, {1}',
		lastName, firstName);
	Ext.MessageBox.alert('', msg);
};
var doRowDblClick = function(thisGrid) {
	doMsgBoxAlert(thisGrid);
};
var doRowCtxMenu = function(thisGrid, rowIndex, evtObj) {
	evtObj.stopEvent();
	thisGrid.getSelectionModel().selectRow(rowIndex);
	if (!thisGrid.rowCtxMenu) {
		thisGrid.rowCtxMenu = new Ext.menu.Menu({
			items: {
				text: 'View Record',
				handler: function() {
					doMsgBoxAlert(thisGrid);
				}
			}
		});
	}
	thisGrid.rowCtxMenu.showAt(evtObj.getXY());
};

var gridView = new Ext.grid.GridView();

var grid = {
	xtype: 'grid',
	columns: columnModel,
	store: remoteJsonStore,
	loadMask: true,
	bbar: pagingToolbar,
	autoExpandColumn: 'addressCol',
	view: gridView,
	selModel: new Ext.grid.RowSelectionModel({
		singleSelect: true
	}),
	stripeRows: true,
	listeners: {
		rowdblclick: doRowDblClick,
		rowcontextmenu: doRowCtxMenu,
		destroy: function(thisGrid) {
			if (thisGrid.rowCtxMenu) {
				thisGrid.rowCtxMenu.destroy();
			}
		}
	}
};

new Ext.Window({
	height: 350,
	width: 550,
	border: false,
	resizable: true,
	layout: 'fit',
	renderTo: Ext.getBody(),
	items: grid
}).show();

Ext.StoreMgr.get('ourRemoteStore').load({
	params: {
		start: 0,
		limit: 50
	}
});