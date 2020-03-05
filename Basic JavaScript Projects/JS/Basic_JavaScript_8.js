function full_sentence() {
    var part_1 = "Faster, Faster ";
    var part_2 = "Until the thrill of speed ";
    var part_3 = "overcomes the fear ";
    var part_4 = "of death! ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All rubber and no engine is not ideal.";
    var Section = Sentence.slice(18,25);
    document.getElementById("Slice").innerHTML = Section;
}

function test_upp() {
    var Up = "braydon";
    var Cap = Up.toUpperCase();
    document.getElementById("Upper").innerHTML = Cap;
}

function Jeep_Function() {
    var str = "Look at that Trackhawk!";
    var n = str.search("Trackhawk");
    document.getElementById("Jeep").innerHTML = n;
}

function string_method() {
    var X = 1318;
    document.getElementById("Num_to_string").innerHTML = X.toString();
}

function precision_method() {
    var X = 123456789.123456789123456789123456789
    document.getElementById("Precision").innerHTML = X.toPrecision(13);
}

function tofix_Function() {
    var num = 1318.1313131313;
    var n = num.toFixed(2);
    document.getElementById("fix").innerHTML = n;
}

function valueof_Function() {
    var num = 18;
    var n = num.valueOf()
    document.getElementById("Value").innerHTML = n;
}