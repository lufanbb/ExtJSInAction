var myCreateCallback = function(btn, text) {
	console.info('You pressed ' + btn);
	if (text) {
		console.info('You entered : ' + text)
	}

	Ext.onReady(promptMessage);
}

var myPromptCallback = function(btn, text) {
	console.info('You pressed ' + btn);
	if (text) {
		console.info('You entered : ' + text)
	}
	/**
	 * Ext.Msg.show
	 * @type {String}
	 */
	Ext.Msg.show({
		title: 'Input required:',
		msg: 'Please tell us a little about yourself',
		width: 300,
		buttons: Ext.MessageBox.OKCANCEL,
		multiline: true,
		fn: myShowCallback,
		icon: Ext.MessageBox.INFO
	});
}


var myShowCallback = function(btn, text) {
	console.info('You pressed ' + btn);
	if (text) {
		console.info('You entered : ' + text)
	}
	Ext.Msg.show({
		title: 'Hold on there cowboy!',
		msg: 'Are you sure you want to reboot the internet?',
		width: 300,
		buttons: Ext.MessageBox.YESNOCANCEL,
		fn: myCallback,
		icon: Ext.MessageBox.ERROR
	});
}

var myCallback = function(btn, text) {
	console.info('You pressed ' + btn);
	if (text) {
		console.info('You entered : ' + text)
	}
}

/**
 * [Alert Message Box]
 * @return {[type]} [description]
 */
function createMessage() {
	var msg = 'Your document was saved successfully';
	var title = 'Save status:'
	Ext.MessageBox.alert(title, msg, myCreateCallback);
}

Ext.onReady(createMessage);

/**
 * [Prompt Message Box]
 * @return {[type]} [description]
 */
function promptMessage() {
	var msg = 'Please enter your email address.';
	var title = 'Input Required'
	Ext.MessageBox.prompt(title, msg, myPromptCallback);
}

