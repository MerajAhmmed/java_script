var mobile = {
    brand: 'xiomi',
    ram:'6GB',
    processor: 'mediatach',
    color:'black'
}
console.log(mobile);
console.log(mobile.color);
mobile.color= 'blue';
console.log(mobile)  // chaile amara kono object er key er vlaue change korte parbo 


// object er key gulake paite chaile segula array akare asbbe 
// er jonno amke object.keys function use kora lagbe 
// abr objecr er values gulake access korte chiale object.values function use korte hobe

var computer ={
    name: 'meraj compute',
    brand: 'lenevo',
    color: 'black',
    price: 42000,
    os:'w11'
}

var propertys = Object.keys(computer);
var propertysOfObject = Object.values(computer);
console.log(propertys);
console.log(propertysOfObject);

computer.os = 'w10';

var propertysOfObject = Object.values(computer);
var propertysOfObject1 = Object.values(computer);
console.log(propertysOfObject);
console.log(propertysOfObject1);


// there is no need to change the variable name after change the value os a specific keys of the object just call the object



// now we will learn about how we can access dynamically property keys and its values  this the anpothe way to access the vlaues 



var propertyName = 'brand';

var propertyValue = computer[propertyName];
console.log(propertyName, propertyValue);