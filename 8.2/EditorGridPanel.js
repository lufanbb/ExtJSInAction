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