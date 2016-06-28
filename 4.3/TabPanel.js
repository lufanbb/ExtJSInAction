var simpleTab = {
	title: 'simpleTab tab',
	id: 'simpleTab',
	html: 'Simple!'
}
var closableTab = {
	title: 'I am closable',
	html: 'Please close when done reading.',
	closable: true
}

var closableTab2 = {
	title: 'I am closable2',
	html: 'Please close when done reading.',
	closable: true
}

var closableTab3 = {
	title: 'I am closable3',
	html: 'Please close when done reading.',
	closable: true
}

var disabledTab = {
	title: 'Disabled tab',
	id: 'disabledTab',
	html: 'Peekaboo!',
	disabled: true,
	closable: true
}
var tabPanel = new Ext.TabPanel({
	title: 'Tab Panel',
	activeTab: 2,
	id: 'myTPanel',
	enableTabScroll: true,
	buttons: [{
		text: 'Add New Tab',
		handler: addTabPanel,
		autoScroll: true,
		enableToggle: true
	},{
		text: 'Enable Tab1',
		handler: enableTabPanel,
		autoScroll: true,
		enableToggle: true
	},{
		text: 'Enable Tab2',
		handler: enableTabPanel,
		autoScroll: true,
		enableToggle: true
	},{
		text: 'Enable Tab3',
		handler: enableTabPanel,
		autoScroll: true,
		enableToggle: true
	},{
		text: 'Enable Tab4',
		handler: enableTabPanel,
		autoScroll: true,
		enableToggle: true
	},{
		text: 'Enable Tab5',
		handler: enableTabPanel,
		autoScroll: true,
		enableToggle: true
	},{
		text: 'Enable Tab6',
		handler: enableTabPanel,
		autoScroll: true,
		enableToggle: true
	}],
	items: [
		simpleTab,
		closableTab,
		closableTab2,
		closableTab3,
		disabledTab,
	]
});

new Ext.Window({
	title: 'Tab Panel Window',
	height: 300,
	width: 400,
	layout: 'fit',
	items: tabPanel
}).show();
/**
 * [Add a tab panel to the tabs]
 */
function addTabPanel() {
	var tPanel = Ext.getCmp('myTPanel');
	tPanel.add({
		title: 'AddedNew tab',
		id: 'myAddedNewTab'
	});
	tPanel.setActiveTab('myAddedNewTab');
}

/**
 * [Enable disableTab]
 * @return {[type]} [description]
 */
function enableTabPanel(){
	Ext.getCmp('disabledTab').enable();
}