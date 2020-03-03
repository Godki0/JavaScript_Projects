function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = " 2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiply() {
    var simple_math = 8 * 8;
    document.getElementById("MATH").innerHTML = "8 x 8 = " + simple_math
}

function division() {
    var simple_math = 48 / 10;
    document.getElementById("matH").innerHTML = "48 / 10 = " + simple_math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("maTh").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 = " + simple_Math
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("mAth").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math
}

function negation_Operator() {
    var X = 25;
    document.getElementById("mATH").innerHTML = -X;
}

var A = 6;
A++;
document.write(A);

var B = 9;
B--;
document.write(B);

window.alert(Math.random() * 100);

var C = 10;
C--;
document.write(C);

function math_pow() {
    document.getElementById("demo").innerHTML = Math.pow(18, 2);
}

function square_root() {
    document.getElementById("square").innerHTML = Math.sqrt(324);
}

function my_Dictionary() {
    var Animal = {
        Species: "Dog" ,
        Color: "Blue",
        Breed: "Pitbull",
        Age: 3,
        Sound: "Howl!"
    } ;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

