function onClickEvent() {
	var el = Ext.get('div1');
	el.on('click', function() {
		alert(this.id + ' is doing somthing')
	});
}

Ext.onReady(onClickEvent);

function onClickExt() {
	Ext.get('myDiv').on('contextmenu', function(eventObj, elRef) {
		console.log('myDiv contextmenu Handler, source el ID: ' + elRef.id);
	});
	Ext.get('myHref').on('contextmenu', function(eventObj, elRef) {
		eventObj.stopEvent();
		console.log('myHref contextmenu Handler, source el ID: ' + elRef.id);
		if (!this.ctxMenu) {
			this.ctxMenu = new Ext.menu.Menu({
				items: [{
					text: "This is"
				}, {
					text: "our custom"
				}, {
					text: "context menu"
				}]
			});
		}
		this.ctxMenu.show(elRef);
	});
}

Ext.onReady(onClickExt);