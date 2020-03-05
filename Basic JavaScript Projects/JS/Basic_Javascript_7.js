var X = 18;
function Add_Num_1() {
    document.write(13 + X + "<br><br>");
}
function Add_Num_2() {
    document.write(X + 324 + "<br><br>");
}
Add_Num_1();
Add_Num_2();

function Add_Num_3() {
    var B = 13;
    document.write(18 + B + "<br><br>");
}
function Add_Num_4() {
    document.write(B + 324 + "<br><br>");
}
Add_Num_3();
Add_Num_4();

function get_time() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greet").innerHTML = "How are you today?";
    }
}

function get_hour() {
    if (new Date().getHours() > 17) {
        document.getElementById("hour").innerHTML = "How is your evening?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Drive = "You can drive!";
    }
    else {
        Drive = "You can not drive!";
    }
    document.getElementById("drive_age").innerHTML = Drive;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time> 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function slice_Method() {
    var Sentence = "All rubber and no engine is not ideal.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
