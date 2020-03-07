function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X <= 18) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function string_length() {
    var str = "Braydon";
    var n = str.length;
    document.getElementById("String").innerHTML = n;
}

var Animalname = ["Kyng", "Ketry", "Kylemay", "Katniss", "Kita"];
var Content = "";
var Y;
function Dog_Name() {
    for (Y = 0; Y < Animalname.length; Y++) {
        Content += Animalname[Y] + "<br>";
    }
    document.getElementById("Dog").innerHTML = Content;
}

function test_array() {
    var array_picture = [];
    array_picture[0] = "test 1";
    array_picture[1] = "test 2";
    array_picture[2] = "test 3";
    array_picture[3] = "test 4";
    document.getElementById("array").innerHTML = "Here is a array " +
    array_picture[2] + ".";
}

function constant_function() {
    const vehicle = {model: "Trackhawk", make: "Jeep", color: "dark grey"};
    vehicle.color = "cream grey";
    vehicle.price = "80,000";
    document.getElementById("constant").innerHTML = "The cost of the " +
    vehicle.model + " was " + vehicle.price;
}

var B = 18;
document.write(B);
{
    let B = 13;
    document.write("<br>" + B);
}
document.write("<br>" + B)

function myFunction(name) {
    return "Hello " + name;
}
document.getElementById("math").innerHTML = myFunction("Aleisa");

let car = {
    make: "Chevrolet ",
    model: "Corvette c8 ",
    year: "2020 ",
    color: "dark grey ",
    description: function() {
        return " The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML = car.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 6) { break; }
    text += "The Number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

var word = "";
var b;
for (b = 0; b < 10; b++) {
    if (b === 5) {continue; }
    word += "The number is " + b + "<br>";
}
document.getElementById("demo").innerHTML = word;