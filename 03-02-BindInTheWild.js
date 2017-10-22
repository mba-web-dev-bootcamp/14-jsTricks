var colt;
// not what you want
// colt = {
//     firstName: "Colt",
//     sayHi: function() {
//         setTimeout(function(){
//             console.log("Hi " + this.firstName);
//         }, 1000);
//     }
// };

// not you do want
colt = {
    firstName: "Colt",
    sayHi: function() {
        setTimeout(function(){
            console.log("Hi " + this.firstName);
        }.bind(this), 1000);
    }
};




console.log(colt.sayHi());