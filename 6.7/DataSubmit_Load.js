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

var onSuccessOrFail = function(form, action) {
	var formPanel = Ext.getCmp('myFormPanel');
	formPanel.el.unmask();
	var result = action.result;
	if (result.success) {
		Ext.MessageBox.alert('Success', action.result.msg);
	} else {
		Ext.MessageBox.alert('Failure', action.result.msg);
	}
}

var submitHandler = function() {
	var formPanel = Ext.getCmp('myFormPanel');
	formPanel.el.mask('Please wait', 'x-mask-loading');
	formPanel.getForm().submit({
		url: './success.true.txt',
		success: onSuccessOrFail,
		failure: onSuccessOrFail
	});
}

var loadHandler = function() {
	var formPanel = Ext.getCmp('myFormPanel');
	formPanel.el.mask('Please wait', 'x-mask-loading');
	formPanel.getForm().load({
		url: './data.txt',
		success: function() {
			formPanel.el.unmask();
		}
	});
}

var myFormPanel = new Ext.form.FormPanel({
	renderTo: Ext.getBody(),
	width: 700,
	title: 'Our complex form',
	height: 360,
	frame: true,
	id: 'myFormPanel',
	layout: 'vbox',
	beforeshow: loadHandler,
	layoutConfig: {
		align: 'stretch'
	},
	buttons: [{
		text: 'Save',
		handler: submitHandler
	}, {
		text: 'Load',
		handler: submitHandler
	}],
	items: [
		fieldsetContainer,
		tabPanel
	]
});

Ext.onReady(loadHandler);