Ext.QuickTips.init();
new Ext.Viewport({
	layout: 'fit',
	title: 'Exercising scrollable tabs',
	items: {
		xtype: 'tabpanel',
		activeTab: 0,
		id: 'myTPanel',
		enableTabScroll: true,
		resizeTabs: true,
		minTabWidth: 75,
		items: [{
			title: 'our first tab'
		}]
	}
});
(function(num) {
	for (var i = 1; i <= 30; i++) {
		var title = 'Long Title Tab # ' + i;
		Ext.getCmp('myTPanel').add({
			title: title,
			html: 'Hi, i am tab ' + i,
			tabTip: title,
			closable: true
		});
	}
}).defer(500);