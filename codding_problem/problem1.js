function multiply(a){
    return function(b) {
        return function(c) {
            return (a+b)/c;
        };
    };
}

const number = multiply(9)(1)(7);
console.log(number);