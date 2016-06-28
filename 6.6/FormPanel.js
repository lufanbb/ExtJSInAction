var fieldset1 = {
	xtype: 'fieldset',
	title: 'Name',
	flex: 1,
	border: false,
	labelWidth: 60,
	defaultType: 'field',
	defaults: {
		anchor: '-10',
		allowBlank: false
	},
	items: [{
		fieldLabel: 'First',
		name: 'firstName'
	}, {
		fieldLabel: 'Middle',
		name: 'middle'
	}, {
		fieldLabel: 'Last',
		name: 'firstName'
	}]
};

var fieldset2 = Ext.apply({}, {
	flex: 1,
	title: 'Address Information',
	items: [{
		fieldLabel: 'Address',
		name: 'address'
	}, {
		fieldLabel: 'Street',
		name: 'street'
	}, {
		xtype: 'container',
		border: false,
		layout: 'column',
		anchor: '100%',
		items: [{
			xtype: 'container',
			layout: 'form',
			width: 200,
			items: [{
				xtype: 'textfield',
				fieldLabel: 'State',
				name: 'state',
				anchor: '-20'
			}]
		}, {
			xtype: 'container',
			layout: 'form',
			columnWidth: 1,
			labelWidth: 30,
			items: [{
				xtype: 'textfield',
				fieldLabel: 'Zip',
				anchor: '-10',
				name: 'Zip'
			}]
		}]
	}]
}, fieldset1);

var fieldsetContainer = {
	xtype: 'container',
	layout: 'hbox',
	height: 120,
	layoutConfig: {
		align: 'stretch'
	},
	items: [
		fieldset1,
		fieldset2
	]
};

var tabs = [{
	xtype: 'container',
	title: 'Phone Numbers',
	layout: 'form',
	defaults: {
		xtype: 'textfield',
		width: 230
	},
	items: [{
		fieldLabel: 'Home',
		name: 'home'
	}, {
		fieldLabel: 'Business',
		name: 'business'
	}, {
		fieldLabel: 'Mobile',
		name: 'mobile'
	}, {
		fieldLabel: 'Fax',
		name: 'fax'
	}]
}, {
	title: 'Resume',
	xtype: 'htmleditor',
	name: 'resume'
}, {
	title: 'Bio',
	xtype: 'htmleditor',
	name: 'bio'
}];

var tabPanel = {
	xtype: 'tabpanel',
	activeTab: 0,
	bodyStyle: 'padding: 6px 6px',
	deferredRender: false,
	layoutOnTabChange: true,
	border: false,
	flex: 1,
	plain: true,
	items: tabs
}

var myFormPanel = new Ext.form.FormPanel({
	renderTo: Ext.getBody(),
	width: 700,
	title: 'Our complex form',
	height: 360,
	frame: true,
	id: 'myFormPanel',
	layout: 'vbox',
	layoutConfig: {
		align: 'stretch'
	},
	items: [
		fieldsetContainer,
		tabPanel
	]
});