//literals
let price=500;
let quan=3;
//normal
//console.log(`Total price ${price*quan} taka \nPay now!`)
//ternary
let stock=1;
console.log(`Status: ${stock>0?"In Stock" :"Out of Stock"}`)
//use function
function cal(price){
    return price*quan;
}
//console.log(`Total price ${cal(price)} taka \nPay now!`)
//use function
function dis(price){
    return price*0.1;
}
console.log(`Total Discount ${dis(price)} taka \nTotal bill ${cal(price)-dis(price)}\nPay now!`)
