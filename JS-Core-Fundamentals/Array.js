//Array
const arr=["Antor","Biswas","CSE",71]

console.log(arr)
console.log(arr[0])

const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length);

arr.push("Deep");
arr.push("Probar");

console.log("use push method=",arr);
arr.pop()
console.log("use pop method=",arr)

cars.splice(0,1,"BMW","Audi");
console.log("use splice method=",cars)

const arr1=["p1","p2","p3","p4"];
arr1.unshift("Ep1","Ep2")
console.log("use unshift method=",arr1);

arr1.shift("Ep1")
console.log("use shift method=",arr1);
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log("USe concat to join",myChildren)

