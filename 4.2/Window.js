var win;
/**
 * [Create a new Window that will be opened when button clicked.]
 * Below two arguments are defined by Ext.Button framework
 * @param  {[Button]} btn [This Button.]
 * @param  {[EventObject]} ent [The click event.]
 * @return {[type]}     [description]
 */
var newWindow = function(btn, ent) {
	if (!win) {
		win = new Ext.Window({
			animateTarget: btn.el,
			html: 'My first vanilla Window',
			closeAction: 'hide',
			id: 'myWin',
			height: 200,
			width: 300,
			constrain: true
		});
	}
	win.show();
}
new Ext.Button({
	renderTo: Ext.getBody(),
	text: 'Open my Window',
	style: 'margin: 100px',
	handler: newWindow
});

var win2 = new Ext.Window({
	height: 75,
	width: 200,
	modal: true,
	title: 'This is one rigid window',
	html: 'Try to move or resize me. I dare you.',
	plain: true,
	border: false,
	resizable: false,
	draggable: false,
	closable: false,
	buttonAlign: 'center',
	buttons: [{
		text: 'I give up!',
		handler: function() {
			win2.close();
		}
	}]
})
win2.show();