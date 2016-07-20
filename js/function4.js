// callback,modules,cascade,curry,memorization

//Callback - functions can make it easier to deal with discontinious events

// 1) Syncronous way
/*
document.writeln("callback Syncronous");
request = prepare_the_request();
response = send_request_synchronously(request);
display(response);
document.writeln("here");
*/

// 2) Asynchronous way
/*
document.writeln("call back Asynchronous");
request = prepare_the_request();
document.writeln("here");
send_request_asyncronously(request,function(response){
	display(response);
	});
document.writeln("here");
*/

// Modules

// adding deentityfy method

String.method('deentityfy',function(){
	var entity = {
		quot: '"',
		lt: '<',
		gt: '>'
		};
	return function(){
		return this.replace(/&([^&;]+);/g,function(a,b){
			var r = entity[b];
			return typeof r === 'string' ? r:a;
			}
		);
	};
}());
document.writeln('&lt;&quot;&gt;'.deentityfy());


// object to produce serial number

var serial_maker = function(){
	var prefix = '';
	var seq = 0;
	return {
		set_prefix: function(p){
			prefix = String(p);
			}, 
		set_seq : function(s){
			seq = s;
			},
		gensym : function(){
			var result = prefix+seq;
			seq+=1;
			return result;
			}
		};
	};

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();
unique = seqer.gensym();
document.writeln(unique);
unique = seqer.gensym();
document.writeln(unique);
var unique2 = seqer.gensym();
document.writeln(unique2);

// curry
/*
Function.method('curry',function(){
	var args = arguments, that = this;
	return function(){
		return that.apply(null,args.concat(arguments));
		};
	}); // something isn't right
*/
// argumnets concat is not good
// arguments is not actualy an array

Function.method('curry',function(){
	var slice = Array.prototype.slice,
	args = slice.apply(arguments),
	that = this;
	return function(){
		return that.apply(null,	args.concat(slice.apply(arguments)));
		};
	});
var add1 = add.curry(1);
document.writeln(add1(6));
