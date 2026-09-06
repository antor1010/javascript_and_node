//find max
let marks=[10,2,20,50,100,80,110,70];

let max=marks[0];

for(let i=1;i<marks.length;i++){
    if(max<marks[i]){
        max=marks[i];
    }
}
console.log(max)
//sum
let sum=0
for (let j of marks){
    sum +=j
}
console.log(sum)

//reverse
let newA = [];

for (let k=marks.length-1;k>=0;k--){
    newA.push(marks[k])
}
console.log(newA)
