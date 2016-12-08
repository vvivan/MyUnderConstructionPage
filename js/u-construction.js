function qte (text, author) {
	this.text = text;
	this.author = author;
};

var q = new Array(); // declare q as an array

//declare new objects
q[0] = new qte ("Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", "Martin Golding");
q[1] = new qte ("If debugging is the process of removing software bugs, then programming must be the process of putting them in.", "Edsger Dijkstra");

/*document.getElementById("quote").innerHTML = q[1].text;
document.getElementById("author").innerHTML = q[1].author;*/
