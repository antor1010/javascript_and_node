//function
//return type
function login(number){
    console.log("Enter pin:");
    return number;
}

let pass=login(1234)

console.log(`your pin ${pass}`)
//without return type
function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello("Antor");

//arrow function

const bazar = (price,items) =>{
    const total= price*items;
    return total;
}
const khoroj=bazar(100,2);
console.log(khoroj);

//arrow function 2nd without return

const add1 = (a, b) => a + b;

const sum0=add1(10,10);
console.log(sum0)
