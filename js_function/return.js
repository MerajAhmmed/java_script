function add(num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    // eikhane sum ke return na korele unsefined dekhabe 

    return sum;
}

var total = add(80, 20);
console.log('total', total)