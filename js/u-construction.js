function qte (text, author) {
	this.text = text;
	this.author = author;
};

        var q = new Array(); // declare q as an array

        //declare new objects
        q[0] = new qte ("Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", "Martin Golding");
        q[1] = new qte ("If debugging is the process of removing software bugs, then programming must be the process of putting them in.", "Edsger Dijkstra");
        q[2] = new qte ("Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", "Bill Gates");
        q[3] = new qte ("“Nine people can’t make a baby in a month.” (regarding the addition of more programmers to get a project completed faster)", "Fred Brooks");
        q[4] = new qte ("Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", "Brian W. Kernighan");
        q[5] = new qte ("There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.", "C.A.R. Hoare");

        document.getElementById("quote").innerHTML = q[0].text;
        document.getElementById("author").innerHTML = q[0].author;

        var i;
        i=1;
        var timer = setInterval(function () {if (i==q.length){i=0;}     document.getElementById("quote").innerHTML = q[i].text;
            document.getElementById("author").innerHTML = q[i].author;
            i++;}, 6000);
                
            