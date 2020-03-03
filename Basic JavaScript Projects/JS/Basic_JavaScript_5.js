document.write(typeof "word"); 

function test_1() {
    document.getElementById("Test").innerHTML = 0/0;
}

function test_2() {
    document.getElementById("TEst").innerHTML = isNaN('This is a string of words');
}

function test_3() {
    document.getElementById("TEST").innerHTML = isNaN('18');
}

document.write(2e310); 

document.write(-2e310);

document.write(18 > 13);

document.write(18 < 13);

console.log(18 + 13);

document.write("18" + 13);

console.log(Boolean());

document.write(18 == 18);

document.write(18 ==13);

X = 10;
Y = 10;
document.write(X === Y);

A = 18;
B = 13;
document.write(A === B);

C = 5;
D = "3";
document.write(D === C);

F = 5;
F = 5;
document.write(F === F);

document.write(18 > 13 && 10 > 3);

document.write(18< 13 && 10>3);

document.write(3 > 1 || 1>3);

document.write(1>3 || 3 < 1);

function not_Function() {
    document.getElementById("Not").innerHTML = !(3 > 6);
}

function Not_Function() {
    document.getElementById("NOT").innerHTML = !(3 > 1);
}