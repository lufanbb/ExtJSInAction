/*
Registering Events
 */
var myObservable = new Ext.util.Observable();
myObservable.addEvents('sayHello');
myObservable.addEvents('sayGoodbye');
/*
If you want to register more than one event, you can pass one event label per argument:
 */
// myObservable.addEvents('sayhello', 'saygoodbye');
/*
Alternatively, you can pass in a configuration object that has a list of event labels and
whether they should be enabled by default:
 */
// myObservable.addEvents({
// 	'sayHello' : true,
// 	'sayGoodbye' : true
// });
// 
myObservable.on('sayHello', function() {
	console.log('Hello stranger');
});

myObservable.fireEvent('sayHello');
/*
Register Events with arguments
 */
var sayGoodbyeFn = function(firstName, lastName) {
	console.log('Goodbye ' + firstName + ' ' + lastName + '!');
};
myObservable.on('sayGoodbye', sayGoodbyeFn);

myObservable.un('sayGoodbye', sayGoodbyeFn);

myObservable.fireEvent('sayGoodbye', 'John', 'Smith');

// myObservable.removeListener('sayGoodbye', sayGoodbyeFn);