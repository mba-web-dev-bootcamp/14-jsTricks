function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
};
Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
};
Vehicle.prototype.honk = function(){
    if(this.isRunning){
        return "beep";
    }
};



var car = new Vehicle("Toy", "Carola", 1997);
console.log("The Car is running = " + car.isRunning);
console.log("Honking gives you " + car.honk());
car.turnOn();
console.log("The Car is running = " + car.isRunning);
console.log("Honking gives you " + car.honk());

