window.alert("Welcome to first test!");

var B = "This will be red with a breaking point <br><br>"
var B = B.fontcolor("red");

var A = "\"Faster, Faster Until the thrill of speed overcomes the fear of death\""
+ " - Hunter S. Thompson <br><br>"
var A = A.fontcolor("orange")

document.write(B);

document.write(A);

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot about JavaScript!";
    document.getElementById("here").innerHTML = sentence;
}

function My_First_Function() {
    document.getElementById("time").innerHTML = Date()
}


