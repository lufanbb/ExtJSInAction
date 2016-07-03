var remoteProxy = new Ext.data.ScriptTagProxy({
	url: 'http://extjsinaction.com/dataQuery.php'
});

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
	name: 'zipcode',
	mapping: 'zip'
}, {
	name: 'newRecordId',
	mapping: 'newRecordId'
}];

var remoteJsonStore = new Ext.data.JsonStore({
	proxy: remoteProxy,
	storeId: 'ourRemoteStore',
	root: 'records',
	autoLoad: false,
	totalProperty: 'totalCount',
	remoteSort: true,
	fields: recordFields,
	idProperty: 'id'
});

var textFieldEditor = new Ext.form.TextField();
var comboEditor = {
	xtype: 'combo',
	triggerAction: 'all',
	displayField: 'state',
	valueField: 'state',
	store: {
		xtype: 'jsonstore',
		root: 'records',
		fields: ['state'],
		proxy: new Ext.data.ScriptTagProxy({
			url: 'http://extjsinaction.com/getStates.php'
		})
	}
};

var numberFieldEditor = {
	xtype: 'numberfield',
	minLength: 5,
	maxLength: 5
};

var columnModel = [{
	header: 'Last Name',
	dataIndex: 'lastname',
	sortable: true,
	editor: textFieldEditor
}, {
	header: 'First Name',
	dataIndex: 'firstname',
	sortable: true,
	editor: textFieldEditor
}, {
	header: 'Street Address',
	dataIndex: 'street',
	sortable: true,
	id: 'addressCol',
	editor: textFieldEditor
}, {
	header: 'City',
	dataIndex: 'city',
	sortable: true,
	editor: textFieldEditor
}, {
	header: 'State',
	dataIndex: 'state',
	sortable: true,
	editor: comboEditor
}, {
	header: 'Zip Code',
	dataIndex: 'zipcode',
	sortable: true,
	editor: numberFieldEditor
}];

var onSave = function() {
	var modified = remoteJsonStore.getModifiedRecords();
	if (modified.length > 0) {
		var recordsToSend = [];
		Ext.each(modified, function(record) {
			recordsToSend.push(record.data);
		});
		var grid = Ext.getCmp('myEditorGrid');
		grid.el.mask('Updating', 'x-mask-loading');
		grid.stopEditing();
		recordsToSend = Ext.encode(recordsToSend);
		Ext.Ajax.request({
			url: 'successTrue.js',
			params: {
				recordsToInsertUpdate: recordsToSend
			},
			success: function(response) {
				grid.el.unmask();
				remoteJsonStore.commitChanges();
				var result = Ext.decode(response.responseText);
				Ext.each(result.records, function(o) {
					var rIndex = remoteJsonStore.find('newRecordId', o.newRecordId);
					var record = remoteJsonStore.getAt(rIndex);
					record.set('id', o.id);
					delete record.data.newRecordId;
				});
			}
		});
	}
};
var onRejectChanges = function() {
	remoteJsonStore.rejectChanges();
};

var doDelete = function(rowToDelete) {
	var grid = Ext.getCmp('myEditorGrid');
	var recordToDelete = grid.store.getAt(rowToDelete);
	if (recordToDelete.phantom) {
		grid.store.remove(recordToDelete);
		return;
	}
	grid.el.mask('Updating', 'x-mask-loading');
	Ext.Ajax.request({
		url: 'successTrue.js',
		parameters: {
			rowToDelete: recordToDelete.id
		},
		success: function() {
			grid.el.unmask();
			grid.store.remove(recordToDelete);
		}
	});
};
var onDelete = function() {
	var grid = Ext.getCmp('myEditorGrid');
	var selected = grid.getSelectionModel().getSelectedCell();
	Ext.MessageBox.confirm(
		'Confirm Delete',
		'Are you sure?',
		function(btn) {
			if (btn == 'yes') {
				doDelete(selected[0]);
			}
		}
	);
};

var onInsertRecord = function() {
	var newRecord = new remoteJsonStore.recordType({
		newRecordId: Ext.id()
	});
	var grid = Ext.getCmp('myEditorGrid');
	var selectedCell = grid.getSelectionModel().getSelectedCell();
	var selectedRowIndex = selectedCell[0];
	remoteJsonStore.insert(selectedRowIndex, newRecord);
	grid.startEditing(selectedRowIndex, 0);
}

var doCellCtxMenu = function(editorGrid,
	rowIndex, cellIndex, evtObj) {
	evtObj.stopEvent();
	if (!editorGrid.rowCtxMenu) {
		editorGrid.rowCtxMenu = new Ext.menu.Menu({
			items: [{
				text: 'Insert Record',
				handler: onInsertRecord
			}, {
				text: 'Delete Record',
				handler: onDelete
			}]
		});
	}
	editorGrid.getSelectionModel().select(rowIndex, cellIndex);
	editorGrid.rowCtxMenu.showAt(evtObj.getXY());
};

var pagingToolbar = {
	xtype: 'paging',
	store: remoteJsonStore,
	pageSize: 50,
	displayInfo: true,
	items: [
		'-', {
			text: 'Save Changes',
			handler: onSave
		},
		'-', {
			text: 'Reject Changes',
			handler: onRejectChanges
		},
		'-'
	]
};

var grid = {
	xtype: 'editorgrid',
	columns: columnModel,
	id: 'myEditorGrid',
	store: remoteJsonStore,
	loadMask: true,
	bbar: pagingToolbar,
	autoExpandColumn: 'addressCol',
	stripeRows: true,
	listeners: {
		cellcontextmenu: doCellCtxMenu
	},
	viewConfig: {
		forceFit: true
	}
};



function createWindow() {

	new Ext.Window({
		height: 350,
		width: 550,
		border: true,
		layout: 'fit',
		items: grid
	}).show();

	remoteJsonStore.load({
		params: {
			start: 0,
			limit: 50
		}
	});

}

Ext.onReady(createWindow);