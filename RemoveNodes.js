function removeChildFromSelector(){
	var myDiv1 = Ext.get('div1');
	var lastChild = myDiv1.down('div:last-child');
	lastChild.remove();
}
function removeChildFromChaining(){
	Ext.get('child4').remove();
}

Ext.onReady(removeChildFromSelector);
Ext.onReady(removeChildFromChaining);
