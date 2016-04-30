function buildWindow() {
	var win = new Ext.Window({
		id : 'myWindow',
		title : 'My first Ext JS Window ralative path',
		width : 300,
		height : 150,
		layout : 'fit',
		autoLoad : {
			url : 'sayHi.html',
			scripts : true
		}
	});
	win.show();
}
Ext.onReady(buildWindow);
Ext.onReady(function() {
Ext.MessageBox.alert('Hello', 'The DOM is ready!');
});