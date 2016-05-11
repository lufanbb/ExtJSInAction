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