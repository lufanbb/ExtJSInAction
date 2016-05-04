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

function setHeight(){
	var myDiv1 = Ext.get('div1');
	myDiv1.setSize(350, 350, {duration: 1, easing:'bounceOut'});
}
Ext.onReady(setHeight);

function addChildTag(){
	var myDiv1 = Ext.get('div1');
	myDiv1.createChild('Child from a string');
	myDiv1.createChild('<div>Child from a div tag</div>');
	myDiv1.createChild({
		tag : 'div',
		html: 'Child from a config Object' 
	});
	myDiv1.createChild({
		tag : 'div',
		id : 'nestedDiv',
		style : 'border: 1px dashed; padding: 5px;',
		children : {
			tag : 'div',
			html : '...a nested div',
			style : 'color: #EE0000; border: 1px solid'
		}
	});
	myDiv1.insertFirst({
		tag : 'div',
		html : 'Child inserted as node 0 of myDiv1'
	});
	myDiv1.createChild({
		tag : 'div',
		id : 'removeMeLater',
		html : 'Child inserted as node 2 of myDiv1'
		}, myDiv1.dom.childNodes[3]);
	}
Ext.onReady(addChildTag);