var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    addNumbers: function(a, b, c, d){
        return this.firstName + " just calculated " + (a+b+c+d);
        }
};

var elie = {
    firstName: "Elie"
};

var elieCalc = colt.addNumbers.bind(elie, 1, 2, 3, 4);
console.log(elieCalc());


elieCalc = colt.addNumbers.bind(elie);
console.log(elieCalc(3, 4, 5, 6));



