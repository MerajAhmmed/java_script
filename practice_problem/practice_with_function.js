function foo(){
    console.log('This is foo function');
    bar();
}

foo();

function bar(){
    console.log('this is bar function');
}

bar();



function bar(){
    console.log('this is bar function');
    foo();
}

bar();

function foo(){
    console.log('This is foo function');
}

foo();

