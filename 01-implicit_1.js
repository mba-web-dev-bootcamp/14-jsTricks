var person = {
    firstName: "Elie",
    sayHi: function() {
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    }
};

console.log(person.sayHi());
console.log("this === person is " + person.determineContext());