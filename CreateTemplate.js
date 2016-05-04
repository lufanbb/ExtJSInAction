//Ext templates to append single element
var myTpl = new Ext.Template("<div>Hello {0}.</div>");
function appendName(){
	myTpl.append(document.body, ['Marjan']);
	myTpl.append(document.body, ['Michael']);
	myTpl.append(document.body, ['Sebastian']);
}

Ext.onReady(appendName);

var myTpl2 = new Ext.Template(
	'<div style="background-color: {color}; margin: 10px;">',
		'<b> Name :</b> {name}<br />',
		'<b> Age :</b> {age}<br />',
		'<b> DOB :</b> {dob}<br />',
	'</div>'
);

//Ext templates to append a plain object
function appendObj(){
	myTpl2.compile();

	myTpl2.append(document.body,{
		color : "#E9E9FF",
		name : 'John Smith',
		age : 20,
		dob : '10/20/89'
	});

	myTpl2.append(document.body,{
		color : "#FFE9E9",
		name : 'Naomi White',
		age : 25,
		dob : '03/17/84'
	});
}

Ext.onReady(appendObj);

//Ext Xtemplates to look through an array of objects
//Pass parameters to function used in Ext.OnReady
var num = 4;

var tplData = [{
	color : "#FFE9E9",
	name : 'Naomi X White',
	age : 25,
	dob : '03/17/84',
	cars : ['Jetta', 'Camry', 'S2000']
	},{
	color : "#E9E9FF",
	name : 'John X Smith',
	age : 20,
	dob : '10/20/89',
	cars : ['Civic', 'Accord', 'Camry']
}];

function appendXTemplate(num){

	var myTplX = new Ext.XTemplate(
		'<tpl for=".">',
			'<div style="background-color: {color}; margin: 10px;">',
				'<b> Name :</b> {name}<br />',
				'<b> Age :</b> {age}<br />',
				'<b> DOB :</b> {dob}<br />',
			'</div>',
		'</tpl>'
	);
	myTplX.compile();
	myTplX.append(document.body, tplData);
	console.log(num);
}

Ext.onReady(function(){
	appendXTemplate(num);
});

//Ext Xtemplates
function appendLoopInLoop(){
	var myTplL = new Ext.XTemplate(
		'<tpl for=".">',
			'<div style="background-color: {color}; margin: 10px;">',
				'<b> Name :</b> {name}<br />',
				'<b> Age :</b> {age}<br />',
				'<b> DOB :</b> {dob}<br />',
				'<b> Cars : </b>',
				'<tpl for="cars">',
					'{.}',
					'<tpl if="this.isCamry(values)">',
						'<b> (same car)</b>',
					'</tpl>',
					'{[ (xindex < xcount) ? ", " : "" ]}',
				'</tpl>',
				'<br />',
			'</div>',
		'</tpl>',
		{
			isCamry : function(car) {
			return car === 'Camry';
			}
		}
	);
	myTplL.compile();
	myTplL.append(document.body, tplData);
}

Ext.onReady(appendLoopInLoop);