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
