const weight = process.argv[2];
const height = process.argv[3];

function calBmi(weight,height){
    const Bmi = weight/(height*height);
    return Bmi;
}
console.log(`Your weight and height: ${weight} ${height}`);
const cal = calBmi(weight,height);
console.log(`Your BMI: ${cal}`);

if (cal>=18.5 && cal<=24.9){
    console.log("Fit");
}
else if(cal>=25 && cal<=29.9){
    console.log("Overweight");
}
else if (cal<18.5){
    console.log("UnderWeight");
}
else{
    console.log("Obesity");
}
