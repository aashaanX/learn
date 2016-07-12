
// displaying the line in the web page
document.writeln(" ");
document.writeln('hello, world!');
// creating an empty object
//var empty_object = {};

// object creation
var stooge = {
	"first-name" : "Jerome",
	"last-name" : "howard"
};

// object creation
// Note :  object inside object
var flight = {
	airline : "Oceanic",
	number : 815,
	departure : {
		IATA : "SYD",
		time : "2004-09-22 14:55",
		city : "Sydney"
	},
	arrival : {
		IATA : "LAX",
		time : "2004-09-23 10:42",
		city : "Los Angeles"
	}
};
document.writeln("Arjun");
//document.writeln(flight);
//Retrivel
document.writeln(stooge["first-name"]);	// "jerome"
document.writeln(flight.airline);
document.writeln(flight.departure.IATA);
document.writeln(stooge["middle-name"]); // retrivel of non-existing member

document.writeln(stooge["middle-name"] ||"(none)");  // providing the default value
document.writeln(flight.status || "uknown");
document.writeln(flight.equipment && flight.equipment.model);
//updating existing property
stooge["first-name"] = "unnikrishnan";
document.writeln(stooge["first-name"]);
//updating non-existing property
stooge["nick-name"] = "unni"; // Augmented
document.writeln(stooge["nick-name"]);


// objects in js are passed around by reference not copies
var x = stooge;		// reference of stooge is passed to x
x['nick-name'] = "unnikuttan"
document.writeln(x["nick-name"]);
// since values are passed by reference change in one will result in the change in other.
document.writeln(stooge["nick-name"]);


// prototype
if (typeof Object.create !== 'function'){
	Object.create = function (o){
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
var another_stooge = Object.create(stooge);

another_stooge["first-name"] = "Harry";
another_stooge["middle-name"] = "Moses";
another_stooge["nick-name"] = "Moe";
document.writeln(another_stooge["first-name"]);
document.writeln(another_stooge["nickname"]); // delegation
// adding to prototype
stooge.profession = "actor";
document.writeln(another_stooge.profession);


// Reflection
document.writeln(typeof flight.number);
document.writeln(typeof flight.status);
document.writeln(typeof flight.arrival);
document.writeln(typeof flight.manifest);

// Reflection of prototype
document.writeln(typeof flight.toString);
document.writeln(typeof flight.constructor);
document.writeln(typeof flight.create);

// reflecting using hasOwnProperty
// using hasOwnProperty will return true if the memeber is in object

document.writeln(flight.hasOwnProperty('number'));		//true
document.writeln(flight.hasOwnProperty('toString'));		//false

// Enumeration

var name;
for (name in another_stooge){
	if (typeof name !== 'function'){
		document.writeln(name+":"+another_stooge[name]);
	}
}
delete another_stooge["nick-name"];
//delete another_stooge["nick-name"];
document.writeln(another_stooge["nick-name"])


// implementation of a function
function factorial(n){
	if (n==1){
		return 1;
	}
	else{
		return n*factorial(n-1);
	}
};

//var f = factorial(5);
//document.writeln(factorial(5));

	
