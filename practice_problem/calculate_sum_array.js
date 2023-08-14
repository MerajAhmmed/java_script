function summation(arr){
    let sum = 0; //here sum variable value always change so sum variable cannot be const
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

const number =[1,2,3,4,5,6];
const sumationOfArray = summation(number)
console.log(sumationOfArray)