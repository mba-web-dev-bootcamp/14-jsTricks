function counter(){
    var count = 0;
    return function(){
        return ++count;
    };
}

var counter1 = counter();
console.log(counter1()); // 1
console.log(counter1()); // 2

var counter2 = counter();
console.log(counter2()); // 1
console.log(counter2()); // 2

console.log(counter1());

console.log(counter.count);
