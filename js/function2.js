// function2.js Argumnets,Return,Exceptions, Augmenting types

// function that adds a lot of stuff.

var sum = function(){
	var i,sum=0;
	for(i=0;i<arguments.length;i+=1){
		sum += arguments[i];
		}
	return sum
	};
document.writeln(sum(1,2,3,4,5,6));

// Exception

var add = function (a,b){
	if(typeof a!== 'number' || typeof b!== 'number'){
		throw{
			name : 'TypeError',
			message : 'add needs numbers'
		};
	}
	return a+b;
}

// Make a try_it function that calls the new add
//  function incorrectly

var try_it = function (){
	try {
		add('seven');
	}catch(e){
		document.writeln(e.name+":"+e.message);
	}
}

try_it();

// Augmenting Types

Function.prototype.method = function (name,func) {
	this.prototype[name] = func;
	return this;
};
	
// extracting the integer from number
//Number.prototype uses either Math.ceil or Math.floor

Number.method('integer',function(){
	return Math[this<0 ? 'ceil' : 'floor'](this);
	});
document.writeln((-10/3).integer());

// triming the space from end of the string
// not working ??????????????????????????????????????????????????????
String.method('trim',function(){
	return this.replace(/^\s+\s+$/g,'');
});

document.writeln('"' +"    neat  ".trim()+ '"');



