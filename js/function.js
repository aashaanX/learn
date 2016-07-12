// function.js includes various function invocation methodes


// the method invocation pattern

var myObject = {
	value : 0,
	increment : function (inc){
		this.value += typeof inc === 'number' ? inc : 1;
		}
	};

myObject.increment();
document.writeln(myObject.value);

myObject.increment(2);
document.writeln(myObject.value);

// the function invocation pattern

var add = function (a,b){
	return a+b;
	};

var sum = add(3,2);
document.writeln(sum);

//Augmenting myObject with double method
myObject.double = function(){
	var that = this; 	//workaround
	
	var helper = function(){
		that.value = add(that.value,that.value);
		};
	helper();
	}; 
// invoke double as a method
myObject.double();
document.writeln(myObject.value);

// the constructor Invocation pattern

var Quo = function(string){		// function is an object
	this.status = string;
	};
	// give all instances of Quo a public method
Quo.prototype.get_status = function(){
	return this.status;
	};

var myQuo = new Quo("confused");
document.writeln(myQuo.get_status());


//The apply invocation pattern
/* the apply method takes two parameters.
The first is the value that should be bound to this.
The Second is an array of parameters.
*/
var array = [3,4];
var sum = add.apply(null,array);
document.writeln(sum);

var statusObject = {
	status : 'A-OK'
	};

var status = Quo.prototype.get_status.apply(statusObject);
document.writeln(status);



