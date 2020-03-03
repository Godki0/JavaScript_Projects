function my_Dictionary() {
    var Animal = {
        Species: "Bird",
        Color: "Red",
        Breed: "Parrot",
        Age: 2,
        Sound: "Hello!"        
    }
    delete Animal.Breed;
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}

