var htmlEditor = {
	xtype: 'htmleditor',
	fieldLabel: 'Enter in any text',
	anchor: '100% 100%',
	enableFontSize: false,
	enableFont: false,
	allowBlank: false,
	validateValue: function() {
		var val = this.getRawValue();
		return (this.allowBlank ||
			(val.length > 0 && val != '<br>')) ? true : false;
	}
}

var dateField = {
	xtype: 'datefield',
	fieldLabel: 'Please select a date',
	anchor: '50%',
	disabledDates: ["01/16/2000", "01/31/2009"]
}

var fp = new Ext.form.FormPanel({
	renderTo: Ext.getBody(),
	width: 'fit',
	height: 'fit',
	title: 'WYSIWYG',
	labelWidth: 120,
	bodyStyle: 'padding: 10px',
	items: [htmlEditor, dateField]
});