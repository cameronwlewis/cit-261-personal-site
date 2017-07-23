"use strict";

/**
 * Created by cameronlewis on 6/6/17.
 */

// this creates a prototype for a Car object, using an object constructor function.
// It will be used in instantiating other new Car objects.
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.changeMake = function (new_make) {
        this.make = new_make;
    };
}

// this creates a new Car object.
var myCar = new Car("Toyota", "Corolla", "2007", "silver");

// I can also create an object this way, without a prototype constructor,
// but it's much less useful if you're creating many objects of the same type.
// And sadly, objects created this way can't inherit from other objects,
// even if they have all the same properties like this one.

var wifeCar = { make: "Mini", model: "Cooper", year: "2014", color: "white" };
// The name:value pairs are called properties. For example, the pair make:"Mini" (see above).

// Now, let's use this new method to change the make of the 'myCar' Car object we've created.
myCar.changeMake("Awesome");

// We can also add a new method this way, using the prototype attribute:
Car.prototype.info = function () {
    var infoString = this.make + ' ' + this.model + ' ' + this.year + ' ' + this.color;
    document.getElementById("method-call1").innerHTML = infoString;
};

//brotherCar = new Car("Ford", "Ranger", "1997", "green");


// Here, Coupe is created as a subclass of Car, which means it will
// inherit (or receive) all the same properties and methods of Car while still remaining a separate object type.
function Coupe() {
    Car.call(this);
}
// With these lines of code, we're going to have Coupe extend the Car superclass
Coupe.prototype = Object.create(Car.prototype);
Coupe.prototype.constructor = Car; // this makes the constructor for Coupe the same as Car.

// this means that we will now be able to add new properties and methods specific to Coupe.
// But we will still keep all the properties and methods of Car!
// This is very nice, because not only does it decrease code duplication, but it also allows us to separate our objects
// for clearer organization and purpose.

// Now let's create a new Coupe object:
var porsche = new Coupe();

Coupe.prototype.checkInheritance = function () {
    if (this instanceof Car) document.getElementById("car-instance").innerHTML = "Yes, it's true.";else document.getElementById("car-instance").innerHTML = "Nope, it isn't.";
};
//# sourceMappingURL=week3.js.map