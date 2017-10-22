var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    }
};

var elie = {
    firstName: "Elie"
};

console.log(colt.sayHi());
console.log(colt.sayHi.call(elie));