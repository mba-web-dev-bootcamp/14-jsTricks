var person = {
    firstName: "Colt",
    sayHi: function() {
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }
    }
};

console.log(person.sayHi());
console.log("this === person is " + person.determineContext());

console.log(person.dog.sayHello.call(person));
console.log("this === person is " + person.dog.determineContext.call(person));
