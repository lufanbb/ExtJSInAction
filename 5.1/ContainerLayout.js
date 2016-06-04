var childPnl1 = {
	frame: true,
	height: 50,
	html: 'My First Child Panel',
	title: 'First children are fun'
};
var childPnl2 = {
	width: 150,
	html: 'Second child',
	title: 'Second children have all the fun!'
};
var myWin = new Ext.Window({
	height: 300,
	width: 300,
	title: 'A window with a container layout',
	autoScroll: true,
	items: [
		childPnl1,
		childPnl2
	],
	tbar: [{
		text: 'Add child',
		handler: function() {
			var numItems = myWin.items.getCount() + 1;
			myWin.add({
				title: 'Child number ' + numItems,
				height: 60,
				frame: true,
				collapsible: true,
				collapsed: true,
				html: 'Yay, another child!'
			});
			myWin.doLayout();
		}
	}],
	bbar: [{
		text: 'remove child',
		handler: function(){
			var numItems = myWin.items.getCount();
			myWin.remove(myWin.items.itemAt(numItems-1));
			myWin.doLayout();
		}
	}]
});

myWin.show();