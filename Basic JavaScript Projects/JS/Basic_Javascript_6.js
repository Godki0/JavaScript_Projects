function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are to short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function my_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erick drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

var Braydon = new Vehicle("Jeep", "Track Hawk", 2019, "Dark Gray");
var Aleisa = new Vehicle("Chevrolet", "Camero", 2020, "Blue");
var Holly = new Vehicle("Toyota", "Tundra", 2013, "White");
function New() {
    document.getElementById("New_and_This").innerHTML = 
    "Braydon one day soon will own a " + Braydon.Vehicle_Model + " in the color of " + Braydon.Vehicle_Color + " which is manafactured by " + 
    Braydon.Vehicle_Make + " and it will be a " + Braydon.Vehicle_Year
}

function Nest() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var Starting_point = 17;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}