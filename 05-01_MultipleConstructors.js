function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    //Car.call(this, make, model, year);
    //Car.apply(this, [make, model, year]);
    Car.apply(this, arguments);

    this.numWheels = 2;
}

var car = new Car("toyota", "small", 1969);
var motorcycle = new Motorcycle("yamaha", "small", 1982);

console.log(car.numWheels);
console.log(motorcycle.numWheels);
    