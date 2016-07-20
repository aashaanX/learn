
// Recursion

// hanoi tower

var hanoi = function hanoi(disc,src,aux,dst){
	if (disc>0){
		hanoi(disc-1,src,dst,aux);
		document.writeln('Move disc '+disc+' from '+src+' to '+dst);
		hanoi(disc-1,aux,src,dst);
		}
	};

hanoi(4,'src','aux','dst');

// DOM

var walk_the_DOM = function walk(node,func){
	func(node);
	node = node.firstChild;
	while (node){
		walk(node,func);
		node = node.nextSibling;
		}
	};
/*
walk_the_DOM(<body>,print(node){
	document.writeln(node);
	};)
*/

var getElememtByAttribute = function(att,value){
	var results = [];
	walk_the_DOM(document.body,function (node){
		var actual = node.nodeType === 1 && node.getAttribute(att);
		if (typeof actual === 'string' && (actual === value|| typeof value !== 'string')){
			results.push(node);
			}
		});
	return results;
	};
//document.writeln(getElementByAttribute("class");
//document.writeln(getAttribute("class");


//Scope

var foo = function(){
	console.log("here");
	var a=3,b=5;
	var bar = function(){
		var b=7,c = 11;
		a+=b+c;
		document.writeln("a="+a+" b="+b+" c="+c);
	};
	document.writeln("a="+a+" b="+b);
	bar();
	document.writeln("a="+a+" b="+b);

};
// here a is used by inner function from outer
// b is declared in inner function.
// b in inner function is differenet from b in outer function.
foo();


// closure

var myObject = function(){
	var value = 0;
	return{
		increment : function(inc){
			value+= typeof inc === 'number'? inc:1;
			},
		getValue : function(){
			return value;
			}
		};
	}();

//document.writeln(myObject);
myObject.increment();
document.writeln(myObject.getValue());
myObject.increment(2);
document.writeln(myObject.getValue());


// function that sets a DOM node's color to yellow and then fades to white.

var fade = function(node){
	var level = 1;
	var step = function(){
		var hex = level.toString(16);
		node.style.backgroundColor = '#FF00' + hex+hex;
		if (level<15){
			level +=1;
			setTimeout(step,100);
		}
	};
	setTimeout(step,100);
};

fade(document.body);

// function that assign event handler function to an array of nodes

var add_the_handlers = function (nodes){
	var helper = function (i) {
		return function(e) {
			alert(i);
		};
	};
	var i;
	for (i=0;i<nodes.length;i+=1){
		nodes[i].onclick = helper(i);
	}
};



