Ext.QuickTips.init();
var fpItems = [{
	fieldLabel: 'Alpha only',
	allowBlank: false,
	emptyText: 'This field is empty!',
	msgTarget: 'qtip',
	maskRe: /[a-z]/i
}, {
	fieldLabel: 'Simple 3 to 7 Chars',
	allowBlank: false,
	msgTarget: 'title',
	minLength: 3,
	maxLength: 7
}, {
	fieldLabel: 'Special Chars Only',
	msgTarget: 'under',
	stripCharsRe: /[a-zA-Z0-9]/ig
}, {
	fieldLabel: 'Web Only with VType',
	msgTarget: 'under',
	vtype: 'urlOnly'
}, {
	fieldLabel: 'Password',
	allowBlank: false,
	inputType: 'password'
}, {
	fieldLabel: 'File',
	allowBlank: false,
	inputType: 'file'
}, {
	xtype: 'textarea',
	fieldLabel: 'My TextArea',
	name: 'myTextArea',
	anchor: '100%',
	height: 100
}, {
	xtype: 'numberfield',
	fieldLabel: 'Numbers only',
	allowBlank: false,
	emptyText: 'This field is empty!',
	decimalPrecision: 3,
	minValue: 0.001,
	maxValue: 2
}];
var myValidFn = function(v) {
	var myRegex = /https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?/;
	return myRegex.test(v);
};
Ext.apply(Ext.form.VTypes, {
	urlOnly: myValidFn,
	urlOnlyText: 'Must be a valid web URL'
});
var fp = new Ext.form.FormPanel({
	renderTo: Ext.getBody(),
	width: 400,
	height: 'fit',
	title: 'Exercising textfields',
	frame: true,
	bodyStyle: 'padding: 6px',
	labelWidth: 126,
	defaultType: 'textfield',
	defaults: {
		msgTarget: 'side',
		anchor: '-20'
	},
	items: fpItems
});