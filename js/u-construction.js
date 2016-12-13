function qte (text, author) {
	this.text = text;
	this.author = author;
};

var q = new Array(); // declare q as an array

/////////////////////////////////////////
//
// Programming Quotes
//
/////////////////////////////////////////
q[0] = new qte ("Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", "Martin Golding");
q[1] = new qte ("If debugging is the process of removing software bugs, then programming must be the process of putting them in.", "Edsger Dijkstra");
q[2] = new qte ("Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", "Bill Gates");
q[3] = new qte ("“Nine people can’t make a baby in a month.” (regarding the addition of more programmers to get a project completed faster)", "Fred Brooks");
q[4] = new qte ("Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", "Brian W. Kernighan");
q[5] = new qte ("There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.", "C.A.R. Hoare");
q[6] = new qte ("C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.", "Bjarne Stroustrup");
q[7] = new qte ("When debugging, novices insert corrective code; experts remove defective code.", "Richard Pattis");
q[8] = new qte ("Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.", "Eric S. Raymond");
q[9] = new qte ("Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.", "Linus Torvalds");
q[10] = new qte ("Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.", "Rich Cook");
q[11] = new qte ("Any fool can write code that a computer can understand. Good programmers write code that humans can understand", "Martin Fowler");
q[12] = new qte ("Good code is its own best documentation. As you’re about to add a comment, ask yourself, ‘How can I improve the code so that this comment isn’t needed?", "Steve McConnell");
q[13] = new qte ("The problem with using C++ … is that there’s already a strong tendency in the language to require you to know everything before you can do anything.", "Larry Wall");
q[14] = new qte ("People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.","Donald Knuth");
q[15] = new qte ("One of my most productive days was throwing away 1000 lines of code.", "Ken Thompson");
q[16] = new qte ("Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.", "Alan Kay");
q[17] = new qte ("Before software can be reusable it first has to be usable.", "Ralph Johnson");
q[18] = new qte ("Programming is like sex. One mistake and you have to support it for the rest of your life.", "Michael Sinz");
q[19] = new qte ("If builders built buildings the way programmers wrote programs, then the first woodpecker that came along wound destroy civilization.", "Gerald Weinberg");

/////////////////////////////////////////////////////////////



document.getElementById("quote").innerHTML = q[0].text;
document.getElementById("author").innerHTML = q[0].author;

var i;
i=1;
var timer = setInterval(function () {if (i==q.length){i=0;}     document.getElementById("quote").innerHTML = q[i].text;
    document.getElementById("author").innerHTML = q[i].author;
    i++;}, 6000);
                
            