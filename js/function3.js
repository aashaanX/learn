
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








