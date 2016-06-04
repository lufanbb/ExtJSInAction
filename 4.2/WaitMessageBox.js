function waitMessageBox() {
	/**
	 * [Show Simple Wait Message Box]
	 * @type {String}
	 */
	// Ext.MessageBox.wait("We're doing something...", 'Hold on...', {
	// 	text: 'loading your items'
	// });

	Ext.MessageBox.show({
		title: 'Hold on there cowboy!',
		msg: "We're doing something...",
		progressText: 'Initializing...',
		width: 300,
		progress: true,
		closable: false
	});
}

Ext.onReady(waitMessageBox);


var updateFn = function(num) {
	return function() {
		if (num == 6) {
			Ext.MessageBox.updateProgress(100,
				'All Items saved!');
			Ext.MessageBox.hide.defer(1500,
				Ext.MessageBox);
		} else {
			var i = num / 6;
			var pct = Math.round(100 * i);
			Ext.MessageBox.updateProgress(i,
				pct + '% completed');
		}
	};
};
for (var i = 1; i < 7; i++) {
	setTimeout(updateFn(i), i * 500);
}