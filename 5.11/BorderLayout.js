new Ext.Viewport({
	layout: 'border',
	defaults: {
		frame: true
	},
	items: [{
		title: 'North Panel',
		region: 'north',
		height: 100,
		minHeight: 100,
		maxHeight: 150,
		collapsible: true
	}, {
		title: 'East Panel',
		region: 'east',
		width: 100,
		minWidth: 75,
		maxWidth: 150,
		collapsible: true
	}, {
		title: 'West Panel',
		region: 'west',
		collapsible: true,
		collapseMode: 'mini'
	}, {
		title: 'South Panel',
		region: 'south',
		height: 75,
		split: false,
		margins: {
			top: 5
		}
	}, {
		xtype: 'container',
		region: 'center',
		layout: 'fit',
		id: 'centerRegion',
		autoEl: {},
		items: {
			title: 'Center Region',
			id: 'centerPanel',
			html: 'I am disposable',
			frame: true
		}
	}]
});