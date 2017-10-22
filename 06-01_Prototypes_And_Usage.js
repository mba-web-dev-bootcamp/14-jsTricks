function Person(name){
    this.name = name;
    this.sayHi = function() {
        return "Hi " + this.name;
    };
}

var elie = new Person("Elie");
elie.sayHi();

